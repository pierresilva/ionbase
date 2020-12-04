declare var $: any;

export class SummernoteConfigs {

    public customButtons = null;
    public buttons: any = {};
    public buttonsArray: any[] = [];
    public summernoteId: any = null;

    public constructor(customButtons: any = null, summernoteId: any = null) {

        this.customButtons = customButtons;
        this.summernoteId = summernoteId;

        this.crateCustomButtons();
        console.log(this.buttonsArray, this.buttons);
    }

    public configMinimal: any = {
        width: '100%',
        dialogsInBody: true,
        toolbar: [
            // [groupName, [list of button]]
            ['style', ['bold', 'italic', 'underline', 'clear']],
            ['font', ['strikethrough', 'superscript', 'subscript']],
            ['fontsize', ['fontsize']],
            ['color', ['color']],
            ['para', ['ul', 'ol', 'paragraph']],
            ['height', ['height']],
            ['misc', ['fullscreen', 'codeview']],
            // ['custom', ['test', 'paperSize']],
            ['paperSize',['paperSize']]
        ],
        buttons: {
            test: this.customButton,
            paperSize: this.paperSize
        },
        fontNames: ['Helvetica', 'Arial', 'Arial Black', 'Comic Sans MS', 'Courier New', 'Roboto', 'Times']
    }

    public getConfig(configName: any): Promise<any> {
        // const ret = await this[configName];
        return this[configName];
    }

    public paperSize(context) {

        const summernote = $.summernote;
        const ui = summernote.ui;

        const button = ui.buttonGroup([
            ui.button({
                className: 'dropdown-toggle',
                contents:  'Papel',
                tooltip:   'Tamaño del papel',
                container: 'body',
                data: {
                    toggle: 'dropdown'
                }
            }),
            ui.dropdown({
                className: 'dropdown-template',
                items: ['A2', 'A3', 'A4'],
                click: function (e) {
                    var $button = $(e.target);
                    var value = $button.data('value');
                    e.preventDefault();
                    $('.note-frame').removeClass('note-document');
                    $('.note-editing-area').removeClass('a0').removeClass('a1').removeClass('a2').removeClass('a3').removeClass('a4').removeClass('a5');
                    switch (value){
                        case 'A0':
                            $('.note-frame').addClass('note-document');
                            $('.note-editing-area').addClass('a0');
                            $('.note-editable').css({'width':'2384px'}); // height:3370
                            break;
                        case 'A1':
                            $('.note-frame').addClass('note-document');
                            $('.note-editing-area').addClass('a1');
                            $('.note-editable').css({'width':'1684px'}); // height:2384
                            break;
                        case 'A2':
                            $('.note-frame').addClass('note-document');
                            $('.note-editing-area').addClass('a2');
                            $('.note-editable').css({'width':'1191px'}); // height:1684
                            break;
                        case 'A3':
                            $('.note-frame').addClass('note-document');
                            $('.note-editing-area').addClass('a3');
                            $('.note-editable').css({'width':'842px'}); // height:1191
                            break;
                        case 'A4':
                            $('.note-frame').addClass('note-document');
                            $('.note-editing-area').addClass('a4');
                            $('.note-editable').css({'width':'595px'}); // height:842
                            break;
                        case 'A5':
                            $('.note-frame').addClass('note-document');
                            $('.note-editing-area').addClass('a5');
                            $('.note-editable').css({'width':'420px'}); // height:595
                            break;
                        default:
                            $('.note-frame').removeClass('note-document');
                            $('.note-editing-area').removeClass('a0').removeClass('a1').removeClass('a2').removeClass('a3').removeClass('a4').removeClass('a5');
                            $('.note-editable').css({'width':'100%'});
                    }
                }
            })
        ]);

        return button.render();

    }

    public bladeIfStatement(context) {
        const summernote = $.summernote;
        const ui = summernote.ui;

        const button = ui.button({
            contents: '@if',
            click: function () {
                context.invoke('editor.insertText', '{{ $hello }}');
            }
        });

        return button.render();
    }

    public customButton(context) {
        const summernote = $.summernote;
        const ui = summernote.ui;

        // create button
        const button = ui.button({
            contents: '<ion-icon name="trash"></ion-icon> Hello',
            click: function () {
                // invoke insertText method with 'hello' on editor module.
                context.invoke('editor.insertText', '{{ $hello }}');
            }
        });

        return button.render();   // return button as jquery object

    }


    public crateCustomButtons() {
        if (this.customButtons && this.summernoteId) {
            for (let button in this.customButtons) {
                this.buttons[button] = (context) => {
                    const ui = $.summernote.ui;
                    const button = ui.button({
                        // @ts-ignore
                        contents: (this.customButtons[button].icon ? '<ion-icon name="trash"></ion-icon>' : '') + this.customButtons[button].name,
                        click: () => {
                            context.invoke('editor.insertText', this.customButtons[button].text);
                        }
                    });
                    return button.render();
                }

                this.buttonsArray.push(button);
            }
        }

    }
}
