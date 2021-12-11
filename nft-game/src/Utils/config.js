if (localStorage.getItem("token")) {
    var variavel = localStorage.getItem("token")
}
else { variavel = null }
export var CONFIG =
{
    headers: {
        Authorization: `Bearer ${variavel}`
    }
};
