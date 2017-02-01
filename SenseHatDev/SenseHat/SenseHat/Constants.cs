using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SenseHat
{
    public static class Constants
    {
        public const string RaspberryPiIp = "192.168.0.23";
        public const string apiUrl = "http://" + RaspberryPiIp + ":8080/v1/led?";
        public const string RaspberryPiUser = "pi";
        public const string RaspberryPiPassword = "raspberry";
    }
}