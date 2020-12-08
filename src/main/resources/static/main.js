var logout = function () {
    $ .post ("/ logout", function () {
        $ ("# usuário"). html ('');
        $ (". não autenticado"). show ();
        $ (". authenticated"). hide ();
    })
    return true;
}