import { MailTemplate } from "../mail-templates/mail-template";

export interface Mail {

    id?: any;
    name?: any;
    mail_template_id?: any,
    subject?: any,
    receiver?: any,
    html?: any,
    text?: any,
    mail_template?: MailTemplate,
    created_at?: any;
    updated_at?: any;
    deleted_at?: any;
}

export interface MailLists {

    MailTemplate?: MailTemplate[],

}
