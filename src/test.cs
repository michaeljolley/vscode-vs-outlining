using System;
using System.Collections.ObjectModel;
using System.Diagnostics;
using BaldBeardedBases.Core.Common;

namespace BaldBeardedBases.UI;

public partial class MainPage : ContentPage
{
	public ObservableCollection<Analytic> analytics { get; set; }
    private BaldBeardedBases.Core.Data.Supabase supabase = new BaldBeardedBases.Core.Data.Supabase();

	public MainPage()
	{
		InitializeComponent();
        analytics = new ObservableCollection<Analytic>();
        BindingContext = this;
	}

    private async void LoadAnalytics(object sender, EventArgs e)
    {
        analytics.Clear();
        List<Analytic> newAnalytics = await supabase.GetAnalyticsAsync();
        foreach (Analytic a in newAnalytics)
        {
            analytics.Add(a);
        }

        Debug.WriteLine(analytics.Count);
    }
}

