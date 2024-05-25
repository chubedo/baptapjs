document.querySelector('.box-space .buttons button:nth-child(1)').addEventListener('click', function() {
    var selectedValue;
    var radioButtonElements = document.querySelectorAll('.row-4 .box:nth-child(1) input');
    for (let i = 0; i < radioButtonElements.length; i++) {
        if (radioButtonElements[i].checked) {
            selectedValue = radioButtonElements[i].value;
            break;
        }
    }

    if (selectedValue != undefined) {
        alert('Ban da chon gia tri: ' + selectedValue);
    } else {
        alert('Ban chua chon gia tri nao');
    }
});


document.querySelector('.box-blue .input-text button').addEventListener('click', function() {
    var linkText;
    var textArea = document.querySelector('.box-blue .input-text textarea');
    var imgBox = document.querySelector('.row-5 .box:nth-child(2)')
    console.log(imgBox);
    linkText = textArea.value;
    console.log(linkText);
    var img = document.createElement('img');
    img.src = linkText;
    img.onload = function() {
        img.style.maxWidth = '100%';
        img.style.maxHeight = '100%';
        img.style.objectFit = 'contain';
        imgBox.appendChild(img);
    }
    img.onerror = function() {
        alert('duong dan k hop le');
    };
})

document.querySelector('.row-4 .box:nth-child(2) button').addEventListener('click', function() {
    var firstString;
    var secondString;
    var inputFirstText = document.querySelector('.row-4 .box:nth-child(2) input:nth-child(1)');
    var inputSecondText = document.querySelector('.row-4 .box:nth-child(2) input:nth-child(2)');
    firstString = inputFirstText.value;
    secondString = inputSecondText.value;
    var finalString = firstString + " " + secondString;
    var textNotiElement = document.querySelector('.row-5 .box-space .box');
    textNotiElement.textContent = finalString;
})

document.querySelector('.row-5 .box-space .buttons button:nth-child(2)').addEventListener('click', function() {
    var firstOptionValue;
    var secondOptionValue;
    var firstOption = document.querySelector('.row-5 .box-space .choose-option label input');
    var secondOption = document.querySelector('.row-5 .box-space .choose-option label:nth-child(2) input');
    var textNotiElement = document.querySelector('.banner');
    if (firstOption.checked && !secondOption.checked) {
        textNotiElement.textContent = firstOption.value;
    } else if (!firstOption.checked && secondOption.checked) {
        textNotiElement.textContent = secondOption.value;
    } else if (firstOption.checked && secondOption.checked) {
        textNotiElement.textContent = firstOption.value + " " + secondOption.value;
    } else textNotiElement.textContent = 'khong co gia tri duoc chon';
})


document.querySelector('.row-5 .box-space .buttons button:nth-child(3)').addEventListener('click', function() {
    var optionValue = document.querySelectorAll('.row-5 .box-space .choose-option input');
    optionValue.forEach(function(check) {
        check.checked = false;
    })
})

document.querySelector('.row-4 .box:nth-child(5) button').addEventListener('click', function() {
    var valueOfOne = document.querySelector('.row-4 .box:nth-child(5) select option:nth-child(2)');
    var valueOf_ = document.querySelector('.row-4 .box:nth-child(5) select option:nth-child(1)');
    var box09 = document.querySelector('.row-3 .box:nth-child(7)');
    document.querySelector('.row-4 .box:nth-child(5) select').onchange = function(event) {
        var isSelected = event.target.value;
        if (isSelected === valueOfOne.value) {
            box09.style.backgroundColor = 'black';
        } else if (isSelected === valueOf_.value) {
            box09.style.backgroundColor = '';
        }
    }
})

document.querySelector('.row-4 .box:nth-child(5) select').onchange = function(event){
    var IsSelected = event.target.value;
    var valueOfOne = document.querySelector('.row-4 .box:nth-child(5) select option:nth-child(2)')
    if (IsSelected == valueOfOne.value){
        alert('ban da thay doi gia tri cua combobox');
    }
}

document.querySelector('.row-4 .box:nth-child(2) button').addEventListener('click', function() {
    var color1 = document.querySelector('.row-4 .box:nth-child(2) input:nth-child(1)').value;
    console.log(color1);
    var color2 = document.querySelector('.row-4 .box:nth-child(2) input:nth-child(2)').value;
    console.log(color2);
    var color = color1 || color2;
    var boxes = document.querySelectorAll('.box-a');
    boxes.forEach(function(element){
        element.style.backgroundColor = color;
    })
})

function getDate() {
    var today = new Date();
    var day = today.getDate();
    var month = today.getMonth() + 1;
    var year = today.getFullYear();
    return day + '/' + month + '/' + year;
}

function getTime() {
    var now = new Date();
    var second = now.getSeconds();
    var min = now.getMinutes();
    var hour = now.getHours();
    return hour + ":" + min + ":" + second;
}

function getBrowser() {
    var browser = navigator.userAgent.toLowerCase();
    if (browser.indexOf('chrome') > -1) return 'chrome';
    if (browser.indexOf('firefox') > -1) return 'firefox';
    if (browser.indexOf('opr') > -1) return 'opera'; 
}

document.querySelector('.row-4 .box-blue:nth-child(3) button').addEventListener('click', function() {
    var browserIsSelected = document.querySelector('.datalist').value.toLowerCase();
    var browserIsUsing = getBrowser();
    var mess;
    if (browserIsSelected === browserIsUsing) {
        var timeNow = getTime();
        mess = "Dung trinh duyet - [" + timeNow + "]";
    } else {
        var dateNow = getDate();
        mess = "Sai trinh duyet - [" + dateNow + "]";
    }
    alert(mess);
})

document.querySelector('.box-blue .input-text button').addEventListener('click', function() {
    var text;
    var textArea = document.querySelector('.box-blue .input-text textarea');
    text = textArea.value;
    var boxes = document.querySelectorAll('.box-a');
    boxes.forEach(function(box) {
        if (text === 'Add textbox') {
            if (box.getElementsByTagName('input').length === 0) {
                var textBox = document.createElement('input');
                textBox.type = 'text';
                box.appendChild(textBox);
            }
        } else if (text === 'Remove textbox') {
            var textBox = box.querySelector('input[type="text"]');
            if (textBox) {
                box.removeChild(textBox);
            }
        }
    })
})

var test =
document.querySelector('.row-4 .box:nth-child(2) button')
console.log(test);
    