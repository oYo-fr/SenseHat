using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Drawing;

namespace SenseHat.ViewModel
{
    public class Leds
    {
        private List<Led> leds = new List<Led>();
        public Leds()
        {
            Clear();
        }

        public void Clear()
        {
            leds.Clear();
            for (short i = 0; i < 8; i++)
            {
                for (short j = 0; j < 8; j++)
                {
                    leds.Add(new Led()
                    {
                        x = i,
                        y = j,
                        r = 0,
                        b = 0,
                        g = 0
                    });
                }
            }
            Send();
        }

        private WebClient wc = new WebClient();
        public void Send()
        {
            foreach(Led l in leds)
            {
                wc.UploadData(l.ToString(), "PUT", new byte[0]);
            }
        }

        public void Post(string content)
        {
            wc.UploadData(content, "POST", new byte[0]);
        }

        public void SendFile(string filename)
        {
            leds.Clear();
            Bitmap img = new Bitmap(filename);
            for (int i = 0; i < img.Width; i++)
            {
                for (int j = 0; j < img.Height; j++)
                {
                    Color pixel = img.GetPixel(i, j);
                    leds.Add(new Led()
                    {
                        x = (short)i,
                        y = (short)j,
                        r = pixel.R,
                        b = pixel.B,
                        g = pixel.G
                    });
                }
            }
            Send();
        }
    }
}
