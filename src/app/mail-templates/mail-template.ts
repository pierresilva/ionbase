import { Mail } from "../mails/mail";

export interface MailTemplate {

    id?: any;
    name?: any;
    subject?: any,
    mailable?: any,
    html_template?: any,
    text_template?: any,
    mail_ids?: any[],
    mails?: Mail[],
    created_at?: any;
    updated_at?: any;
    deleted_at?: any;
}

export interface MailTemplateLists {

    Mail?: Mail[],

}
