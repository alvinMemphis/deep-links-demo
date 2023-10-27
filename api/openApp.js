// pages/api/openApp.js
import { NextApiRequest, NextApiResponse } from 'next';

export default (req, res) => {
  const userAgent = req.headers['user-agent'];

  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    res.status(200)
  } else if (/android/i.test(userAgent)) {
    res.status(200)
  } else {
  res.status(404).send('Not Found');
  }
};
