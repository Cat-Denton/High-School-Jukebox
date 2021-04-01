High School Jukebox Project

Levels of functionality:

1. Just return “tracks” in text format.
2. Playlist return
3. Adding a player so we can play it.  

Things needed to achieve level 1:

1. User Interface
  - Form: 
      Inputs: DOB (date field with id = #DOB ) 
      
      Genre 
      Inputs: Genres (id #genre-form), (checkboxes with [name=genre] [id's = #pop, #rock, #jazz, #hip-hop, #electronic, #country, #alternative, #metal, #latin, #r&b]
      
      Output:
      <div id=hiddenOutput></div> (Css: #hiddenOutput display:none)
        <div id=songList></div> (generated from javscript)
        <div id=errorOutput></div> (generated from javscript)

      *further exploration* look into adding a player to the website. 

      CSS Styling
      
High School Jukebox Project

Levels of functionality:

Just return “tracks” in text format.
Playlist return
Adding a player so we can play it.  


2. Javascript: 
  - Get inputs from user and save as variables (function getElements()).
  - Identify the endpoints needed to get the songs we need. 
  - Change Search API call to include template literals so they can accept the userinput variables.
  - Recieve response from API (save as variable).
  - Loop through the tracks in the response object to aquire the data (list of songs) needed to append the dom. append() and 'template literels' will be used to add new list items to the #songList.
    [--> date = (track, artist, release date)]
  - $('#hiddenOutput').show(); 
  - Add additional error handling functioning. using $('showError')
  

