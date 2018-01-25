$(function(){
    
    // create table object
    function Table(list){
        this.listOfSongs = list;
        this.tbody = $("#tbody");
        this.radioButtons = $("input[name=minmax]")

        this.populateTable = function(sortingFunction){
            if(sortingFunction != null){
                this.listOfSongs = this.listOfSongs.sort(sortingFunction);
            }
            //
            //
            //
            //
            this.tbody.html("");
            this.listOfSongs.forEach(song => {
                let row = $("<tr>");
                $("<td>").text(song.rank).appendTo(row);
                $("<td>").text(song.song).appendTo(row);
                $("<td>").text(song.artist).appendTo(row);
                $("<td>").text(song.releaseYear).appendTo(row);
                $("<td>").text(song.duration).appendTo(row);
                this.tbody.append(row);

            });
        }

        this.setListOfSongs = function(list){
            this.listOfSongs = list;
        }
    }
    
    
    
    // create ajax call to get data
    function getData(){
        $.ajax({
            method: "GET",
            url: "http://demo6418849.mockable.io/songs",
            success: function(data){
                table.setListOfSongs(data);
                table.populateTable();
            },
            error: function(error){
                console.log(error);
            }
        });
    }

    // create sorting function and call populateTable()
    function sortData(e){
       let pickedValue = e.target.value;
       let sortingFunction;
       switch(pickedValue){
           case "1": // sort by Rank
           sortingFunction = (songOne, songTwo) => {
               return parseInt (songOne.rank) - parseInt(songTwo.rank);
           }
           break;
           
           case "2": // sort by Song Name
           sortingFunction = (songOne, songTwo) => {
               return songOne.song.localeCompare(songTwo.song);
           }
           break;

           case "3": // sort by Artist
           sortingFunction = (songOne, songTwo) => {
            return songOne.artist.localeCompare(songTwo.artist);
        }
           break;

           case "4": // sort by Release Year
           sortingFunction = (songOne, songTwo) => {
            return parseInt (songOne.releaseYear) - parseInt(songTwo.releaseYear);
        }
           break;

           case "5": // sort by Duration
           sortingFunction = (songOne,songTwo) =>{
               return evaulateMinutesToSeconds(songOne.duration) - evaulateMinutesToSeconds(songTwo.duration);
           }
           break;

           default:
           break;
       }
       function evaulateMinutesToSeconds(time){
        let vreme = time.split(":").map(x => parseInt(x));   
           return (vreme[0]*60 + vreme[1]);
       }

       table.populateTable(sortingFunction);
    }


    // create event listener
    $("#pull").on("click", getData);
    $("#sort").on("change", sortData);

    let table = new Table([])
});