var vaultUI = 0;

$('document').ready(
        function(){
            
         
           
        }
);
function openVaultMenu(){
    $('#vaultmaincontainer').css('visibility','hidden');
    $('#scSideBar').addClass('zindex888');
    $('#closeVaultMenuBX').show();

}

function closeVaultMenu(){
    console.log('Close Menu');
    
    $('#vaultmaincontainer').css('visibility','visible');
    $('.scSidesbars').removeClass('zindex888');
    $('#closeVaultMenuBX').hide();

    // $('#scMainBar').show();
}