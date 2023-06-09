const rooter_navigate = (e) => {

    var labelEl = document.querySelector('.label');

    var homePageEl = document.querySelector('.home')
    var mangasPageEl = document.querySelector('.mangas')
    var novelsPageEl = document.querySelector('.novels')

    var iconSpanEl = document.querySelectorAll('.foobar span')

    switch(e) {
        case 1: // home container [ novels and manhwas / manga / manhua...]
            mangasPageEl.style.display = "none"
            novelsPageEl.style.display = "none"

            homePageEl.style.display = "block"
            iconActived(0);
            break;
        case 2: // manhwas / manga / manhua... 
            novelsPageEl.style.display = "none"
            homePageEl.style.display = "none"
        
            mangasPageEl.style.display = "block"
            iconActived(1);
            break;
        case 3: // novels 
            homePageEl.style.display = "none"
            mangasPageEl.style.display = "none"
            
            novelsPageEl.style.display = "block"
            iconActived(2);
            break;
        case 4: // read page
            iconActived(3);
            break;
    }

    function iconActived(e) {
        switch(e) {
            case 0:
                for(var i = 0; i < iconSpanEl.length; i++) {
                    if(i == e){
                        var icon = iconSpanEl[e]
                        $(icon).addClass('btnActive');
                        icon.style.border = 'none';

                        labelEl.textContent = "Home";
                    }else {
                        icon = iconSpanEl[i]
                        $(icon).removeClass('btnActive')
                        icon.style.backgroundColor = 'transparent';
                        icon.style.border = '1px solid var(--icon-color-def)';
                    }
                }
                break;        
            case 1:
                for(var i = 0; i < iconSpanEl.length; i++) {
                    if(i == e){
                        var icon = iconSpanEl[e]
                        $(icon).addClass('btnActive');
                        icon.style.border = 'none';

                        labelEl.textContent = "Mangas";
                    }else {
                        icon = iconSpanEl[i]
                        $(icon).removeClass('btnActive')
                        icon.style.backgroundColor = 'transparent';
                        icon.style.border = '1px solid var(--icon-color-def)';
                    }
                }
                break;
            case 2:
                for(var i = 0; i < iconSpanEl.length; i++) {
                    if(i == e){
                        var icon = iconSpanEl[e];
                        $(icon).addClass('btnActive');
                        icon.style.border = 'none';

                        labelEl.textContent = "Novels";
                    }else{
                        icon = iconSpanEl[i]
                        $(icon).removeClass('btnActive');
                        icon.style.backgroundColor = 'transparent';
                        icon.style.border = '1px solid var(--icon-color-def)';
                    }
                }
                break;            
            case 3:
                for(var i = 0; i < iconSpanEl.length; i++) {
                    if(i == e){
                        var icon = iconSpanEl[e]
                        $(icon).addClass('btnActive')
                    }else {
                        icon = iconSpanEl[i]
                        $(icon).removeClass('btnActive');
                        icon.style.backgroundColor = 'transparent';
                        icon.style.border = '1px solid var(--icon-color-def)';
                    }
                }
                break;
        }
    }
}

// [biohazard] use with logo