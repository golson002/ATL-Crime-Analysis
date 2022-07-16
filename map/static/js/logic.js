var url = 'https://raw.githubusercontent.com/golson002/ATL-Crime-Analysis/main/crime_data.json';
earthquakeMarkers = [];

function chooseColorType(crime) { 
if(crime == "LARCENY-FROM VEHICLE"){
    return 'rgba(255,0,0, 1)'
 }
else if(crime == "LARCENY-NON VEHICLE") {
    return 'rgba(0,230,64, 1)'
}
else if(crime == "AGG ASSAULT") {
    return 'rgba(255,255,0, 1)'
}
else if(crime == "ROBBERY") {
    return 'rgba(15,10,222, 1)'
}
else if(crime == "BURGLARY") {
    return 'rgba(249, 105, 14, 1)'
}
else if(crime == "AUTO THEFT") {
    return 'rgba(153, 102, 255, 1)'
}
else if(crime == "HOMICIDE") {
    return 'rgba(0, 0, 0, 1)'
}
}

function chooseColorZone(crime) { 
    if(crime == 1){
        return "red"
     }
    else if(crime == 2) {
        return "orange"
    }
    else if(crime == 3) {
        return "green"
    }
    else if(crime == 4) {
        return "blue"
    }
    else if(crime == 5) {
        return "yellow"
    }
    else if(crime == 6) {
        return "purple"
    }
}

d3.json(url).then(function(response) {

console.log(response)
typeMarkers = [];
zoneMarkers = [];
larcenyVMarkers = [];
larcenyNVMarkers = [];
aggAssaultMarkers = [];
robberyMarkers = [];
burglaryMarkers = [];
autoTheftMarkers = [];
homicideMarkers = [];
mondayMarkers = [];
tuesdayMarkers = [];
wednesdayMarkers = [];
thursdayMarkers = [];
fridayMarkers = [];
saturdayMarkers = [];
sundayMarkers = [];

    for (var i = 0; i < 20315; i++) {
        
        console.log(response.zone[i])  
        typeMarkers.push(
        L.circle([response.lat[i], response.long[i]], 
            {
                //stroke: false,
                fillOpacity: 0.75,
                color: chooseColorType(response.crime_type[i]),
                fillColor: chooseColorType(response.crime_type[i]),
                //radius: 100
            }).bindPopup(`<h3>Offense ID: ${response.offense_id[i]}</h3><hr><p>${response.crime_type[i]}</p><p>ZONE ${response.zone[i]}</p><p>${response.neighborhood[i]}</p><p>${response.location[i]}</p><p>${response.occur_time[i]} ${response.occur_day[i]} ${response.occur_date[i]}</p>`)
        )   
        zoneMarkers.push(
            L.circle([response.lat[i], response.long[i]], 
                {
                    //stroke: false,
                    fillOpacity: 0.75,
                    color: chooseColorZone(response.zone[i]),
                    fillColor: chooseColorZone(response.zone[i]),
                    //radius: 100
                }).bindPopup(`<h3>Offense ID: ${response.offense_id[i]}</h3><hr><p>${response.crime_type[i]}</p><p>ZONE ${response.zone[i]}</p><p>${response.neighborhood[i]}</p><p>${response.location[i]}</p><p>${response.occur_time[i]} ${response.occur_day[i]} ${response.occur_date[i]}</p>`)
            ) 

        if(response.crime_type[i] == "LARCENY-FROM VEHICLE"){
            larcenyVMarkers.push(
                L.circle([response.lat[i], response.long[i]], 
                    {
                        //stroke: false,
                        fillOpacity: 0.75,
                        color: chooseColorZone(response.crime_type[i]),
                        fillColor: chooseColorZone(response.crime_type[i]),
                        //radius: 100
                    }).bindPopup(`<h3>Offense ID: ${response.offense_id[i]}</h3><hr><p>${response.crime_type[i]}</p><p>ZONE ${response.zone[i]}</p><p>${response.neighborhood[i]}</p><p>${response.location[i]}</p><p>${response.occur_time[i]} ${response.occur_day[i]} ${response.occur_date[i]}</p>`)
                )
        }
        else if(response.crime_type[i] == "LARCENY-NON VEHICLE"){
            larcenyNVMarkers.push(
                L.circle([response.lat[i], response.long[i]], 
                    {
                        //stroke: false,
                        fillOpacity: 0.75,
                        color: chooseColorZone(response.crime_type[i]),
                        fillColor: chooseColorZone(response.crime_type[i]),
                        //radius: 100
                    }).bindPopup(`<h3>Offense ID: ${response.offense_id[i]}</h3><hr><p>${response.crime_type[i]}</p><p>ZONE ${response.zone[i]}</p><p>${response.neighborhood[i]}</p><p>${response.location[i]}</p><p>${response.occur_time[i]} ${response.occur_day[i]} ${response.occur_date[i]}</p>`)
                )
        }
        else if(response.crime_type[i] == "AGG ASSAULT"){
            aggAssaultMarkers.push(
                L.circle([response.lat[i], response.long[i]], 
                    {
                        //stroke: false,
                        fillOpacity: 0.75,
                        color: chooseColorZone(response.crime_type[i]),
                        fillColor: chooseColorZone(response.crime_type[i]),
                        //radius: 100
                    }).bindPopup(`<h3>Offense ID: ${response.offense_id[i]}</h3><hr><p>${response.crime_type[i]}</p><p>ZONE ${response.zone[i]}</p><p>${response.neighborhood[i]}</p><p>${response.location[i]}</p><p>${response.occur_time[i]} ${response.occur_day[i]} ${response.occur_date[i]}</p>`)
                )
        }
        else if(response.crime_type[i] == "ROBBERY"){
            robberyMarkers.push(
                L.circle([response.lat[i], response.long[i]], 
                    {
                        //stroke: false,
                        fillOpacity: 0.75,
                        color: chooseColorZone(response.crime_type[i]),
                        fillColor: chooseColorZone(response.crime_type[i]),
                        //radius: 100
                    }).bindPopup(`<h3>Offense ID: ${response.offense_id[i]}</h3><hr><p>${response.crime_type[i]}</p><p>ZONE ${response.zone[i]}</p><p>${response.neighborhood[i]}</p><p>${response.location[i]}</p><p>${response.occur_time[i]} ${response.occur_day[i]} ${response.occur_date[i]}</p>`)
                )
        }
        else if(response.crime_type[i] == "BURGLARY"){
            burglaryMarkers.push(
                L.circle([response.lat[i], response.long[i]], 
                    {
                        //stroke: false,
                        fillOpacity: 0.75,
                        color: chooseColorZone(response.crime_type[i]),
                        fillColor: chooseColorZone(response.crime_type[i]),
                        //radius: 100
                    }).bindPopup(`<h3>Offense ID: ${response.offense_id[i]}</h3><hr><p>${response.crime_type[i]}</p><p>ZONE ${response.zone[i]}</p><p>${response.neighborhood[i]}</p><p>${response.location[i]}</p><p>${response.occur_time[i]} ${response.occur_day[i]} ${response.occur_date[i]}</p>`)
                )
        }
        else if(response.crime_type[i] == "AUTO THEFT"){
            autoTheftMarkers.push(
                L.circle([response.lat[i], response.long[i]], 
                    {
                        //stroke: false,
                        fillOpacity: 0.75,
                        color: chooseColorZone(response.crime_type[i]),
                        fillColor: chooseColorZone(response.crime_type[i]),
                        //radius: 100
                    }).bindPopup(`<h3>Offense ID: ${response.offense_id[i]}</h3><hr><p>${response.crime_type[i]}</p><p>ZONE ${response.zone[i]}</p><p>${response.neighborhood[i]}</p><p>${response.location[i]}</p><p>${response.occur_time[i]} ${response.occur_day[i]} ${response.occur_date[i]}</p>`)
                )
        }
        else if(response.crime_type[i] == "HOMICIDE"){
            homicideMarkers.push(
                L.circle([response.lat[i], response.long[i]], 
                    {
                        //stroke: false,
                        fillOpacity: 0.75,
                        color: chooseColorZone(response.crime_type[i]),
                        fillColor: chooseColorZone(response.crime_type[i]),
                        //radius: 100
                    }).bindPopup(`<h3>Offense ID: ${response.offense_id[i]}</h3><hr><p>${response.crime_type[i]}</p><p>ZONE ${response.zone[i]}</p><p>${response.neighborhood[i]}</p><p>${response.location[i]}</p><p>${response.occur_time[i]} ${response.occur_day[i]} ${response.occur_date[i]}</p>`)
                )
        }


        if(response.occur_day[i] == "Monday"){
            mondayMarkers.push(
                L.circle([response.lat[i], response.long[i]], 
                    {
                        //stroke: false,
                        fillOpacity: 0.75,
                        color: chooseColorZone(response.crime_type[i]),
                        fillColor: chooseColorZone(response.crime_type[i]),
                        //radius: 100
                    }).bindPopup(`<h3>Offense ID: ${response.offense_id[i]}</h3><hr><p>${response.crime_type[i]}</p><p>ZONE ${response.zone[i]}</p><p>${response.neighborhood[i]}</p><p>${response.location[i]}</p><p>${response.occur_time[i]} ${response.occur_day[i]} ${response.occur_date[i]}</p>`)
                )
        }
        else if(response.occur_day[i] == "Tuesday"){
            tuesdayMarkers.push(
                L.circle([response.lat[i], response.long[i]], 
                    {
                        //stroke: false,
                        fillOpacity: 0.75,
                        color: chooseColorZone(response.crime_type[i]),
                        fillColor: chooseColorZone(response.crime_type[i]),
                        //radius: 100
                    }).bindPopup(`<h3>Offense ID: ${response.offense_id[i]}</h3><hr><p>${response.crime_type[i]}</p><p>ZONE ${response.zone[i]}</p><p>${response.neighborhood[i]}</p><p>${response.location[i]}</p><p>${response.occur_time[i]} ${response.occur_day[i]} ${response.occur_date[i]}</p>`)
                )
        }
        else if(response.occur_day[i] == "Wednesday"){
            wednesdayMarkers.push(
                L.circle([response.lat[i], response.long[i]], 
                    {
                        //stroke: false,
                        fillOpacity: 0.75,
                        color: chooseColorZone(response.crime_type[i]),
                        fillColor: chooseColorZone(response.crime_type[i]),
                        //radius: 100
                    }).bindPopup(`<h3>Offense ID: ${response.offense_id[i]}</h3><hr><p>${response.crime_type[i]}</p><p>ZONE ${response.zone[i]}</p><p>${response.neighborhood[i]}</p><p>${response.location[i]}</p><p>${response.occur_time[i]} ${response.occur_day[i]} ${response.occur_date[i]}</p>`)
                )
        }
        else if(response.occur_day[i] == "Thursday"){
            thursdayMarkers.push(
                L.circle([response.lat[i], response.long[i]], 
                    {
                        //stroke: false,
                        fillOpacity: 0.75,
                        color: chooseColorZone(response.crime_type[i]),
                        fillColor: chooseColorZone(response.crime_type[i]),
                        //radius: 100
                    }).bindPopup(`<h3>Offense ID: ${response.offense_id[i]}</h3><hr><p>${response.crime_type[i]}</p><p>ZONE ${response.zone[i]}</p><p>${response.neighborhood[i]}</p><p>${response.location[i]}</p><p>${response.occur_time[i]} ${response.occur_day[i]} ${response.occur_date[i]}</p>`)
                )
        }
        else if(response.occur_day[i] == "Friday"){
            fridayMarkers.push(
                L.circle([response.lat[i], response.long[i]], 
                    {
                        //stroke: false,
                        fillOpacity: 0.75,
                        color: chooseColorZone(response.crime_type[i]),
                        fillColor: chooseColorZone(response.crime_type[i]),
                        //radius: 100
                    }).bindPopup(`<h3>Offense ID: ${response.offense_id[i]}</h3><hr><p>${response.crime_type[i]}</p><p>ZONE ${response.zone[i]}</p><p>${response.neighborhood[i]}</p><p>${response.location[i]}</p><p>${response.occur_time[i]} ${response.occur_day[i]} ${response.occur_date[i]}</p>`)
                )
        }
        else if(response.occur_day[i] == "Saturday"){
            saturdayMarkers.push(
                L.circle([response.lat[i], response.long[i]], 
                    {
                        //stroke: false,
                        fillOpacity: 0.75,
                        color: chooseColorZone(response.crime_type[i]),
                        fillColor: chooseColorZone(response.crime_type[i]),
                        //radius: 100
                    }).bindPopup(`<h3>Offense ID: ${response.offense_id[i]}</h3><hr><p>${response.crime_type[i]}</p><p>ZONE ${response.zone[i]}</p><p>${response.neighborhood[i]}</p><p>${response.location[i]}</p><p>${response.occur_time[i]} ${response.occur_day[i]} ${response.occur_date[i]}</p>`)
                )
        }
        else if(response.occur_day[i] == "Sunday"){
            sundayMarkers.push(
                L.circle([response.lat[i], response.long[i]], 
                    {
                        //stroke: false,
                        fillOpacity: 0.75,
                        color: chooseColorZone(response.crime_type[i]),
                        fillColor: chooseColorZone(response.crime_type[i]),
                        //radius: 100
                    }).bindPopup(`<h3>Offense ID: ${response.offense_id[i]}</h3><hr><p>${response.crime_type[i]}</p><p>ZONE ${response.zone[i]}</p><p>${response.neighborhood[i]}</p><p>${response.location[i]}</p><p>${response.occur_time[i]} ${response.occur_day[i]} ${response.occur_date[i]}</p>`)
                )
        }

        


      }

      var street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });

      var typeLayer = L.layerGroup(typeMarkers);
      var zoneLayer = L.layerGroup(zoneMarkers);
      var larcenyVLayer = L.layerGroup(larcenyVMarkers);
      var larcenyNVLayer = L.layerGroup(larcenyNVMarkers);
      var aggAssaultLayer = L.layerGroup(aggAssaultMarkers);
      var robberyLayer = L.layerGroup(robberyMarkers);
      var burglaryLayer = L.layerGroup(burglaryMarkers);
      var autoTheftLayer = L.layerGroup(autoTheftMarkers);
      var homicideLayer = L.layerGroup(homicideMarkers);
      var mondayLayer = L.layerGroup(mondayMarkers);
      var tuesdayLayer = L.layerGroup(tuesdayMarkers);
      var wednesdayLayer = L.layerGroup(wednesdayMarkers);
      var thursdayLayer = L.layerGroup(thursdayMarkers);
      var fridayLayer = L.layerGroup(fridayMarkers);
      var saturdayLayer = L.layerGroup(saturdayMarkers);
      var sundayLayer = L.layerGroup(sundayMarkers);

      var baseMaps = {
        Street: street
      };

      var overlayMaps1 = {
        //CrimeType: typeLayer,
        Zones: zoneLayer,
      };

      var overlayMaps2 = {
        LarcenyFromVehicle: larcenyVLayer,
        LarcenyNonVehicle: larcenyNVLayer,
        AggAssault: aggAssaultLayer,
        Robbery: robberyLayer,
        Burglary: burglaryLayer,
        AutoTheft: autoTheftLayer,
        Homicide: homicideLayer
      }

      var overlayMaps3 = {
          Monday: mondayLayer,
          Tuesday: tuesdayLayer,
          Wednesday: wednesdayLayer,
          Thursday: thursdayLayer,
          Friday: fridayLayer,
          Saturday: saturdayLayer,
          Sunday: sundayLayer
      }

    //   var myMap1 = L.map("map", {
    //     center: [33.75, -84.4],
    //     zoom: 11.45,
    //     layers: [street,zoneLayer]
    //   });

    //   L.control.layers(baseMaps, overlayMaps1).addTo(myMap1);

    //   var myMap2 = L.map("map", {
    //     center: [33.75, -84.4],
    //     zoom: 11.45,
    //     layers: [street]
    //   });

    //   L.control.layers(baseMaps, overlayMaps2).addTo(myMap2);

      var myMap3 = L.map("map", {
        center: [33.75, -84.4],
        zoom: 11.45,
        layers: [street]
      });

      L.control.layers(baseMaps, overlayMaps3).addTo(myMap3);

        });



