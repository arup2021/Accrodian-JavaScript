//accrodian script
var example = document.getElementsByClassName("accrodian_item");
for (i = 0; i < example.length; ++i) {
    example[i].onclick = function(){
        var current = this;
        for (var i = 0; i < example.length; i++) {
            if (current != example[i]) {
                example[i].classList.remove('active');
                example[i].getElementsByClassName("accrodian_description")[0].style.maxHeight = "0px";
            } else if (current.classList.contains('active') === true) {
                current.classList.remove('active');
                current.getElementsByClassName("accrodian_description")[0].style.maxHeight = "0px";
            }else {
                current.classList.add('active')
                var des_height = current.getElementsByClassName("accrodian_description")[0];
                des_height.style.maxHeight = des_height.scrollHeight + "px";
            }
        }
    }
}
