$(function() {
  
    // First data objects showing previous projects
    const projects = [
      {
        Project: "Echo",
        code: "https://github.com/2fortdev/Echo-lab", 
        page: "https://2fortdev.github.io/Echo-lab/"
      },
      {
        Project: "Delta",
        code: "https://github.com/2fortdev/much-wow-charlie", 
        page: "https://2fortdev.github.io/delta-name/"
      },
      {
        Project: "Charlie",
        code: "https://github.com/2fortdev/much-wow-charlie", 
        page: "https://2fortdev.github.io/much-wow-charlie/"
        },
        {
            Project: "Beta",
            code: "https://github.com/2fortdev/literate-wow", 
            page: "https://2fortdev.github.io/literate-wow/"
    }
    
    ];

    // Second data object to hold resource info
    const resource = [
        {
          resoucename: "Bootstrap Card documentation ",
          link: "https://getbootstrap.com/docs/4.0/components/card/", 
        },
        {
            resoucename: "Bootstrap Footer documentation ",
            link: "https://mdbootstrap.com/docs/b4/jquery/navigation/footer/", 
        },
    ];


    // iterate over the JSON array
    $.each(projects, function (index, item) {
      console.log("Project Name: " + item.Project);
      console.log("Code Repo: " + item.code);
      console.log("Live Page: " + item.page);
    
      // create a brand new HTML element JUST with code
    
    var el = `<div class="card" style=" width:50%";>
    <div class="card-body">
      <h5 class="card-title">${item.Project}</h5>
      <a href="${item.code}" target="_blank" class="link-info" >Code Repo</a> \</p>
      <a href="${item.page}" target="_blank" class="link-info" >Live Page</a> \</p>
    </div>
    <div class="card-footer">
    </div>
  </div> `; 

    //Puts the cards at the end of the First card div
    $('#firstCard').append(el);
    

    });
    // Just as the last object, we iterate through the index of the objects 
    $.each(resource, function (index, item) {
        console.log("Resource: " + item.resoucename);
        console.log("link: " + item.link);
      
    var re = `<div class="card" style=" width:80%";>
    <div class="card-body">
      <h1 class="card-title">Resource</h1>
      <h5 class="card-title">${item.resoucename}</h5>
      <a href="${item.link}" target="_blank" class="link-info" >Link</a> \</p>
    </div>
    <div class="card-footer">
    </div>
  </div>`; 

        //Puts the cards at the end of the First card div, these go second as it works as a stack operation
        $('#firstCard').append(re);

    });

    });