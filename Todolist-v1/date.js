//jshint esversion:6

exports.getDate = function () {

    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    };

    return  new Date().toLocaleDateString("en-US", options);


}

exports.getDay = function () {

    const options = {
        weekday: "long",
    };

   return  new Date().toLocaleDateString("en-US", options);


}