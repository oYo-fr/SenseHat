using Microsoft.VisualBasic.Devices;
using Renci.SshNet;
using SenseHat.ViewModel;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace SenseHat
{
    /// <summary>
    /// Logique d'interaction pour MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
            //UpdateRaspberryPiCode();
            DataContext = new Leds();
        }

        public void UpdateGit()
        {
            string gitCommand = "git";
            string gitAddArgument = @"add -A";
            string gitCommitArgument = @"commit ""explanations_of_changes"" ";
            string gitPushArgument = @"push our_remote";

            Process.Start(gitCommand, gitAddArgument);
                        Process.Start(gitCommand, gitCommitArgument);
                        Process.Start(gitCommand, gitPushArgument);
        }

        private void UpdateRaspberryPiCode()
        {
            using (var client = new SshClient(Constants.RaspberryPiIp, Constants.RaspberryPiUser, Constants.RaspberryPiPassword))
            {
                client.Connect();
                SshCommand cmd = client.RunCommand("cd Documents/git/SenseHat && git pull");

                string result = cmd.Result;

                client.Disconnect();
            }
        }

        private void Button_Click(object sender, RoutedEventArgs e)
        {
            ((Leds)DataContext).Clear();
        }

        private void Button_Click_1(object sender, RoutedEventArgs e)
        {
            ((Leds)DataContext).SendFile(@"Biwee.png");
        }

        private void Button_Click_2(object sender, RoutedEventArgs e)
        {
            ComputerInfo ci = (new ComputerInfo());
            var mem = (100 - (100 * ci.AvailablePhysicalMemory / ci.TotalPhysicalMemory));
            ((Leds)DataContext).Post(string.Format("{0}text={1}&scrollSpeed=0.2&textColourR=250&textColourG=0&textColourB=0&backColourR=0&backColourG=0&backColourB=0", Constants.apiUrl, mem));
        }

        private void InkCanvas_StrokeCollected(object sender, InkCanvasStrokeCollectedEventArgs e)
        {
        }
    }
}
