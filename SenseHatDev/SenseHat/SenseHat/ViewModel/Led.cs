using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SenseHat.ViewModel
{
    public struct Led
    {
        public short x { set; get; }
        public short y { set; get; }
        public short r { set; get; }
        public short g { set; get; }
        public short b { set; get; }

        public override string ToString()
        {
            return Constants.apiUrl + string.Format("x={0}&y={1}&r={2}&g={3}&b={4}", x, y, r, g, b);
        }
    }
}
