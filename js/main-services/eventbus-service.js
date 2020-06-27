export const EVENT_SHOW_MSG = 'show-msg';
export const EVENT_FOLDER_TYPE = 'folder-type';
export const EVENT_MSG_SENT = 'msg-sent';
export const EVENT_EMAIL_STATUS = 'email-status';

const bus = new Vue();

export const eventBus = bus;