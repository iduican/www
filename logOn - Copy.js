// JavaScript Document

// Create the XHR object.
function createCORSRequest(method, url) {
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr) {
        // XHR for Chrome/Firefox/Opera/Safari.
        xhr.open(method, url, true);
    } else if (typeof XDomainRequest != "undefined") {
        // XDomainRequest for IE.
        xhr = new XDomainRequest();
        xhr.open(method, url);
    } else {
        // CORS not supported.
        xhr = null;
    }
    return xhr;
}


// Make the actual CORS request.
function makeCorsRequest() {
    // All HTML5 Rocks properties support CORS.
    
    //var url = 'http://updates.html5rocks.com';

    //var url = 'http://localhost/RestApiTest/Service1.svc/RestApiTest';

    var url = 'http://acsyshealthguide.appspot.com/api/healthsdataset/query//zip/98021/lan/en/type/keyword/format/json';

    alert('CORS test');

    var xhr = createCORSRequest('GET', url);
    if (!xhr) {
        alert('CORS not supported');
        return;
    }

    // Response handlers.
    xhr.onload = function () {
        var text = xhr.responseText;
        alert('Response from CORS request to ' + url + ': ' + text);
    };

    xhr.onerror = function () {
        alert('Woops, there was an error making the request.');
    };

    xhr.send();
}


var oReq = getXMLHttpRequest();

function handler() {
    if (oReq.readyState == 4 /* complete */) {
        if (oReq.status == 200) {
            console.log(oReq.responseText);
            alert(oReq.responseText);
        }
    }
}


function logOnMobile() {

       jQuery.support.cors = true;

       if (oReq != null) {
           
           console.log("login test");

           //oReq.open("GET", "http://localhost/RestApiTest/Service1.svc/RestApiTest", true);
           //oReq.open("GET", "https://api.premera.com/Member/Benefits/Benefits.svc/MemberData?lob=Premera", true, "ionduican", "Prem2013");


           oReq.open("GET", "http://acsyshealthguide.appspot.com/api/healthsdataset/query//zip/98021/lan/en/type/keyword/format/json", true);
           
           oReq.setRequestHeader("Content-Type", "application/vnd.premera.memberdata-v1+json");
           //oReq.setRequestHeader("ANY_HOST", "true");
           //oReq.setRequestHeader("ANY_PORT", "true");

           //oReq.setRequestHeader("Access-Control-Allow-Origin", "*");
           
           oReq.withCredentials = true;
           oReq.onreadystatechange = handler;
           oReq.send();

           window.console.log("request sent");
           
       } else {
           window.console.log("AJAX (XMLHTTP) not supported.");
       }
}   


function getXMLHttpRequest() {
    if (window.XMLHttpRequest) {
        return new window.XMLHttpRequest;
    }
    else {
        try {
            return new ActiveXObject("MSXML2.XMLHTTP.3.0");
        }
        catch (ex) {
            return null;
        }
    }
}
