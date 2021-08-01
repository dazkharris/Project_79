var images = ["https://lh3.googleusercontent.com/iBQUGKoeDwiyemuAtGBanFjT965C2Qy8UGcN3BdQstp0ZD55q3v36-yv8qHOmpDxHCPhaQ=s85", "https://lh3.googleusercontent.com/RrTpXgy-O-3t5nVTOKqLSbv7cS1_3js0wq229YWh-5E_-9wCxBlko-TfYtUFzOgWZIBL6g=s85", "https://media-exp1.licdn.com/dms/image/C4D03AQFKdDBbtgSbug/profile-displayphoto-shrink_200_200/0/1622651142045?e=1628726400&v=beta&t=4DSMCKFek_Xe0EjbKDEBhfRKEro9LIxqmRRQV9BsITw"]

var names = ["Kyle-Jin Harris", "Heyyun Song", "Darren Harris"];
var i = 0;

function update() {
    i++;
    var numbers_of_family_member_in_array = 2
    if (i > numbers_of_family_member_in_array)

    {
        i = 0;
    }
    var updatedImage = images[i];
    ""
    var uptadedName = names[i];
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").src = updatedName;
}