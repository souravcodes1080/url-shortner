import { Url } from "../model/url.model.js";
import { nanoid } from "nanoid";

const urlValidate = (url) => {
  var regex =
    /^(https?|ftp):\/\/(?:[\w-]+\.)+[a-z]{2,}(?::\d{1,5})?(?:\/[\w%\-+]+(?:[.]\w{2,})?)*(?:\?[^\s]*)?(?:#[^\s]*)?$/i;
  return regex.test(url);
};

const shortenUrl = async (req, res) => {
  try {
    //logic
    const { longUrl } = req.body;

    //validate url
    if (!urlValidate(longUrl)) {
      return res.status(206).json({
        success: false,
        message: "Please enter a valid url.",
      });
    }

    //check whether url exists or noe.
    const oldUrl = await Url.findOne({longUrl});
    if(oldUrl){
      return res.status(200).json({
        success: true,
        longUrl: longUrl,
        shortUrl: oldUrl.shortUrl,
        message: "Short url already created.",
      });
    }

    //create short url
    const code = nanoid(5);
    const shortUrl = `${process.env.BACKEND_DOMAIN}/${code}`;

    //save the url in db
    const url = await Url.create({
      longUrl: longUrl,
      code: code,
      shortUrl: shortUrl,
    });
    if (url) {
      return res.status(201).json({
        success: true,
        longUrl: longUrl,
        shortUrl:shortUrl,
        message: "Short url created.",
      });
    }

  } catch (error) {
    console.log(`${error}`);
    return res.status(500).json({
      success: false,
      message: "Error shortening url. Try again later.",
    });
  }
};

const redirectUrl = async (req, res) => {
  try {
    //logic
    const {code} =  req.params;
    
    //check whether shorten url exists or not.
    const url = await Url.findOne({code})
    if(!url){
      return res.status(404).json({
        success: false,
        message: "Shorten url not found.",
      });
    }

    //redirect to main url
    res.redirect(url.longUrl)

  } catch (error) {
    console.log(`${error}`);
    return res.status(500).json({
      success: false,
      message: "Error decoding url. Try again later.",
    });
  }
};

export { shortenUrl, redirectUrl };
