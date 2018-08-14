var closing_time = 15; // sec
var notification_array = [];

function delete_notification(object) {
    document.body.removeChild(object.parentNode);
}

function create_warning() {
    var div_warning = document.createElement("div");
    div_warning.setAttribute("id", "notification-warning");
    div_warning.setAttribute("class", "notification");
    div_warning.innerHTML = "<p class=\"caption\">Warning</p><p class=\"notification-text\">Here the error occurred</p><div class=\"closing\" onclick='delete_notification(this)'>x</div>";
    document.body.appendChild(div_warning);
}

function create_error() {
    var div_error = document.createElement("div");
    div_error.setAttribute("id", "notification-error");
    div_error.setAttribute("class", "notification");
    div_error.innerHTML = "<p class=\"caption\">Error</p><p class=\"notification-text\">Oops, something is wrong</p><div class=\"closing\" onclick='delete_notification(this)'>x</div>";
    document.body.appendChild(div_error);
}

function create_info() {
    var div_info = document.createElement("div");
    div_info.setAttribute("id", "notification-info");
    div_info.setAttribute("class", "notification");
    div_info.innerHTML = "<p class=\"caption\">Info</p><p class=\"notification-text\">very important info</p><div class=\"closing\" onclick='delete_notification(this)'>x</div>";
    document.body.appendChild(div_info);
}

function create_success() {
    var div_success = document.createElement("div");
    div_success.setAttribute("id", "notification-success");
    div_success.setAttribute("class", "notification");
    div_success.innerHTML = "<p class=\"caption\">Success</p><p class=\"notification-text\">Everything is fine</p><div class=\"closing\" onclick='delete_notification(this)'>x</div>";
    document.body.appendChild(div_success);
}
