$(document).ready(function(){

    // Start Student Counter Section 

        var getcountervalues = document.querySelectorAll('.countervalue');
        // console.log(getcountervalues);

        getcountervalues.forEach(function(getcountervalue){
            // console.log(getcountervalue);

            getcountervalue.textContent = 0;

            const updatecounter = function(){

                const getcttarget = +getcountervalue.getAttribute('data-target');
                // console.log(getcttarget);
                // console.log(typeof getcttarget);

                const getctcontent = +getcountervalue.innerText;
                // console.log(getctcontent);
                // console.log(typeof getctcontent); 

                const incnumber = getcttarget/100;
                // console.log(incnumber); 

                if(getctcontent < getcttarget){
                    getcountervalue.textContent = getctcontent+incnumber;
                    setTimeout(updatecounter,50);
                }
            }

            updatecounter();

        });

    // End Student Counter Section 


    // Start Graduate Section 

    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {

      var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Myanmar',     8],
        ['Thailand',      2],
        ['Singapore',  4],
        ['Indonesia', 2],
        ['Srilanka',    8]
      ]);

      var options = {
        title: 'International Students',
        width:500,
        height:350
      };

      var chart = new google.visualization.PieChart(document.getElementById('piechart'));

      chart.draw(data, options);
    }
        

    // End Graduate Section 


    // Start Footer Section
    const getyear = document.getElementById('getyear');
    const getfullyear = new Date().getUTCFullYear();
    getyear.textContent = getfullyear
    // End Footer Section 


    // Start Login & Sticknote 
        // Start Login 
            $('#openform').click(function(){
                document.getElementById('myform').style.display="block";
            });

            $('#closeform').click(function(){
                document.getElementById('myform').style.display="none";
            });
        // End Login 
    // End Login & Sticknote 


});