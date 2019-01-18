const trainFares = [
    {
        id: 'Pop',
        label: 'Population',
        title: 'Population of the UK',
        color: 'pink',
        val: 67000000,
        conv: 0.000001,
        suffix: 'M',
        prefix: null,
        min: 50,
        max: 100,
        step: 1,
        equn: '',
    },
    {
        id: 'Perc',
        label: 'Population that Travels',
        title: 'Percentage of Population that travels regularly',
        color: 'pink',
        val: 0.02,
        conv: 100,
        suffix: '%',
        prefix: null,
        min: 0.1,
        max: 5,
        step: 0.1,
        equn: '',
    },
    {
        id: 'NTravel',
        label: 'No. of Travellers',
        title: 'Number of Travellers = Pop * Perc',
        color: 'blue',
        val: 1340000,
        conv: 0.000001,
        suffix: 'M',
        prefix: null,
        min: '-',
        max: '-',
        step: '-',
        equn: '{Pop}*{Perc}',
    },
    {
        id: 'Journeys',
        label: 'Journeys',
        title: 'Number of Journeys = NTravel * 350',
        color: 'blue',
        val: 469000000,
        conv: 0.000001,
        suffix: 'M',
        prefix: null,
        min: '-',
        max: '-',
        step: '-',
        equn: '{NTravel}*350',
    },
    {
        id: 'PercTax',
        label: 'Tax Percentage',
        title: 'PercTax \'% of Population that pay tax\'',
        color: 'pink',
        val: 0.5,
        conv: 100,
        suffix: '%',
        prefix: null,
        min: 30,
        max: 60,
        step: 0.01,
        equn: '',
    },
    {
        id: 'TaxPay',
        label: 'Taxpayers',
        title: 'Number of taxpayers = Pop * PercTax',
        color: 'blue',
        val: 33500000,
        conv: 0.000001,
        suffix: 'M',
        prefix: null,
        min: '-',
        max: '-',
        step: '-',
        equn: '{Pop}*{PercTax}',
    },
    {
        id: 'PoundPer',
        label: 'Average Return Cost',
        title: 'Average cost of return journey for regular travellers',
        color: 'pink',
        val: 20,
        conv: 1,
        suffix: null,
        prefix: '£',
        min: 5,
        max: 100,
        step: 0.1,
        equn: '',
    },
    {
        id: 'Income',
        label: 'Income',
        title: 'Income from tickets = Journeys * PoundPer * (1 + PercInc)',
        color: 'blue',
        val: 9670780000,
        conv: 1e-9,
        suffix: 'B',
        prefix: '£',
        min: '-',
        max: '-',
        step: '-',
        equn: '{Journeys}*{PoundPer}*(1+{PercInc})',
    },
    {
        id: 'PercInc',
        label: 'Percent Increase ',
        title: 'Year on year % increase in fares',
        color: 'pink',
        val: 0.031,
        conv: 100,
        suffix: '%',
        prefix: null,
        min: 0,
        max: 9,
        step: 0.1,
        equn: '',
    },
    {
        id: 'TotalIn',
        label: 'Total Income',
        title: 'Total income (including subsidies) = Income + Subs',
        color: 'salmon',
        val: 13870780000,
        conv: 1e-9,
        suffix: 'B',
        prefix: '£',
        min: '-',
        max: '-',
        step: '-',
        equn: '{Income}+{Subs}',
    },
    {
        id: 'Subs',
        label: 'Subsidy £',
        title: 'Government subsidy',
        color: 'pink',
        val: 4200000000,
        conv: 1e-9,
        suffix: 'B',
        prefix: '£',
        min: 0,
        max: 10,
        step: 0.1,
        equn: '',
    },
    {
        id: 'SubperTravel',
        label: 'Subsidy per Traveller',
        title: 'Subsidy per regular traveller = Subs / NTravel',
        color: 'yellow',
        val: 3134.3283582089553,
        conv: 1,
        suffix: null,
        prefix: '£',
        min: '-',
        max: '-',
        step: '-',
        equn: '{Subs}/{NTravel}',
    },
    {
        id: 'SubperTax',
        label: 'Sub per Taxpayer',
        title: 'Subsidy per taxpayer = Subs / TaxPay',
        color: 'yellow',
        val: 125.3731343283582,
        conv: 1,
        suffix: null,
        prefix: '£',
        min: '-',
        max: '-',
        step: '-',
        equn: '{Subs}/{TaxPay}',
    },
    {
        id: 'Costs',
        label: 'Total Costs',
        title: 'Total costs = Infra + Borrow + Pay + Profit',
        color: 'salmon',
        val: 14000000000,
        conv: 1e-9,
        suffix: 'B',
        prefix: '£',
        min: '-',
        max: '-',
        step: '-',
        equn: '{Infra}+{Borrow}+{Pay}+{Profit}',
    },
    {
        id: 'Infra',
        label: 'Infrastructure Cost',
        title: 'Cost of infrastructure',
        color: 'pink',
        val: 9000000000,
        conv: 1e-9,
        suffix: 'B',
        prefix: '£',
        min: 3,
        max: 15,
        step: 0.1,
        equn: '',
    },
    {
        id: 'Borrow',
        label: 'Borrowing',
        title: 'Cost of borrowing',
        color: 'pink',
        val: 500000000,
        conv: 1e-9,
        suffix: 'B',
        prefix: '£',
        min: 0.1,
        max: 2,
        step: 0.1,
        equn: '',
    },
    {
        id: 'Pay',
        label: 'Cost of Pay',
        title: 'Cost of pay = Workers + Bosses',
        color: 'salmon',
        val: 3800000000,
        conv: 1e-9,
        suffix: 'B',
        prefix: '£',
        min: '-',
        max: '-',
        step: '-',
        equn: '{Workers}+{Bosses}',
    },
    {
        id: 'Profit',
        label: 'Profit',
        title: 'Cost (i.e. paid out) of profits to shareholders',
        color: 'pink',
        val: 700000000,
        conv: 1e-9,
        suffix: 'B',
        prefix: '£',
        min: 0,
        max: 2,
        step: 0.1,
        equn: '',
    },
    {
        id: 'Net',
        label: 'Net',
        title: 'Net rail income = TotalIn - Costs',
        color: 'yellow',
        val: -129220000,
        conv: 1e-9,
        suffix: 'B',
        prefix: '£',
        min: '-',
        max: '-',
        step: '-',
        equn: '{TotalIn}-{Costs}',
    },
    {
        id: 'Workers',
        label: 'Workers Pay',
        title: 'Pay of workers',
        color: 'pink',
        val: 3300000000,
        conv: 1e-9,
        suffix: 'B',
        prefix: '£',
        min: 0.5,
        max: 8,
        step: 0.1,
        equn: '',
    },
    {
        id: 'Bosses',
        label: 'Bosses Pay',
        title: 'Pay of bosses',
        color: 'pink',
        val: 500000000,
        conv: 1e-9,
        suffix: 'B',
        prefix: '£',
        min: 0.1,
        max: 2,
        step: 0.1,
        equn: '',
    },
];

export default trainFares;