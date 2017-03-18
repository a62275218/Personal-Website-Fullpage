//Json Object
var data = [{
        time: '2014-06-05',
        body: [{
            tag: 'h2',
            content: "Kohler China"
        },
        {
            tag: 'p',
            content: 'Worked in Kohler China as a product engineer. Responsible for calculating the cost of a variety range of products by using Excel. Created and Maintained Bill of Material (BOM).'
        }]
    },
    {
        time: '2015-06-20',
        body: [
            {
                tag: 'h2',
                content: 'Self Learning'
            },
            {
                tag: 'p',
                content: 'Became interested in web development. Commenced study by starting from basic HTML & CSS learning.'
            }]
    },
    {
        time: '2015-03-25',
        body: [{
            tag: 'h2',
            content: "Monash University"
        },
        {
            tag: 'p',
            content: 'Studied in Monash University, majoring Master of Business Information System. Gained the basic knowledge of programming and database manipulation.'
        }]
    },
    {
        time: '2016-10-25',
        body: [{
            tag: 'h2',
            content: "First Project"
        },
            {
                tag: 'p',
                content: 'On completion of numerous demos for practice, commenced the first large project designed by myself. The project is based on AngularJS & Bootstrap. Still working on adding new features to the project.'
            }]
    }
];

$(document).ready(function () {

    //Call function with JSON OBJECT
    $("#myTimeline").albeTimeline(data, {
        effect: "tada",
        showMenu: false,
        sortDesc: false
        //language: "en-us"
    });
	
	//Call function with STRING
    //$("#myTimeline").albeTimeline(str);

});