var form
var sizeTag
$(window).on('load', function() {
    form = $("#rebus_form")
    sizeTag = $("#size")
})
function append_img_input() {
    var sizeStr = sizeTag.val()
    var newSize = parseInt(sizeStr.substring(sizeStr.indexOf("-")+1))+1
    sizeTag.val(sizeStr.substring(0,sizeStr.indexOf("-"))+"-"+newSize)
    if (newSize!=1)
        form.append("<p style='display:inline-block'>+</p>")
    form.append("<input type = \"file\" name=\""+sizeTag.val()+"\" multiple=\"false\" autocomplete=\"off\" onchange='update_img("+sizeTag.val()+")' required/>")
    // form.append("<img id='"+sizeTag.val()+"'>")
}
function append_text_input() {
    var sizeStr = sizeTag.val()
    var newSize = parseInt(sizeStr.substring(sizeStr.indexOf("-")+1))+1
    sizeTag.val(sizeStr.substring(0,sizeStr.indexOf("-"))+"-"+newSize)
    if (newSize!=1)
        form.append("<p style='display:inline-block'>+</p>")
    form.append("<input type = \"text\" name=\""+sizeTag.val()+"\" required/>")
}
function append_url_input() {
    var sizeStr = sizeTag.val()
    var newSize = parseInt(sizeStr.substring(sizeStr.indexOf("-")+1))+1
    sizeTag.val(sizeStr.substring(0,sizeStr.indexOf("-"))+"-"+newSize)
    if (newSize!=1)
        form.append("<p style='display:inline-block'>+</p>")
    form.append("<input type = \"url\" name=\""+sizeTag.val()+"\" required/>")
}
function add_word() {
    var sizeStr = sizeTag.val()
    var newSize = parseInt(sizeStr.substring(0,sizeStr.indexOf("-")))+1
    sizeTag.val(newSize+sizeStr.substring(sizeStr.indexOf("-")))
    form.append("<br>")
}
// function update_img(val) {
//     var reader = new FileReader();
//     $("#"+val).src = "ASF";
//     reader.onload = function (e) {
//         // get loaded data and render thumbnail.
//         $("#"+val).src = e.target.result;
//     };
//     reader.readAsDataURL(this.files[0]);
// }