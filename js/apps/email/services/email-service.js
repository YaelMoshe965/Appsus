import { utilsService } from '../../../main-services/utils-service.js';

const EMAILS_INBOX_LOCALSTORAGE_KEY = 'emails-inbox';
const gDefaultEmails = [
    {
        id: utilsService.makeId(),
        subject: 'Wassap?',
        body: 'pick up!',
        isRead: false,
        sentAt: 'Jun 24',
        folderType: {
            isInbox: true,
            isStarred: false,
            isSent: true,
            isTrash: false
        }
    },
    {
        id: utilsService.makeId(),
        subject: 'Your free trial is over',
        body: 'Please log in and purchase a subscription',
        isRead: true,
        sentAt: 'Jun 18',
        folderType: {
            isInbox: true,
            isStarred: false,
            isSent: false,
            isTrash: false
        }
    },
    {
        id: utilsService.makeId(),
        subject: 'Dor invited you to his party!',
        body: 'Hi Yael! the party start on a Saturday night, Everybody is waiting for you to arrive',
        isRead: true,
        sentAt: 'May 5',
        folderType: {
            isInbox: true,
            isStarred: false,
            isSent: false,
            isTrash: false
        }
    },
    {
        id: utilsService.makeId(),
        subject: 'Gift Card from Sapir',
        body: 'Happy Birthday!!! XOXO!!',
        isRead: true,
        sentAt: 'Apr 29',
        folderType: {
            isInbox: true,
            isStarred: true,
            isSent: false,
            isTrash: false
        }
    },
    {
        id: utilsService.makeId(),
        subject: 'You won a new Iphone',
        body: 'Congrats!',
        isRead: true,
        sentAt: 'Apr 10',
        folderType: {
            isInbox: false,
            isStarred: false,
            isSent: false,
            isTrash: true
        }
    }
];
var gEmails = [];

function _createEmails() {
    var emails = utilsService.loadFromStorage(EMAILS_INBOX_LOCALSTORAGE_KEY);
    if (!emails || !emails.length) {
        emails = gDefaultEmails;
        utilsService.saveToStorage(EMAILS_INBOX_LOCALSTORAGE_KEY, emails);
    }
    return gEmails = emails;
}

function _createEmail(subject, body) {
    const date = new Date();
    const dayOfTheMonth = date.getDate();
    const months = new Array();
    months[0] = "Jan";
    months[1] = "Feb";
    months[2] = "Mar";
    months[3] = "Apr";
    months[4] = "May";
    months[5] = "Jun";
    months[6] = "Jul";
    months[7] = "Aug";
    months[8] = "Sep";
    months[9] = "Oct";
    months[10] = "Nov";
    months[11] = "Dec";
    const month = months[date.getMonth()];
    const newdate = month + ' ' + dayOfTheMonth;
    return {
        id: utilsService.makeId(),
        subject,
        body,
        isRead: false,
        sentAt: newdate,
        folderType: {
            isInbox: true,
            isStarred: false,
            isSent: true,
            isTrash: false
        }
    }
}

function getEmails(folder) {
    var emails = _createEmails();
    if (!folder) return Promise.resolve(emails.filter(email => email.folderType.isInbox));
    var filteredEmails = emails.filter(email => {

        if (folder === 'Inbox') return email.folderType.isInbox;
        else if (folder === 'Sent') return email.folderType.isSent;
        else if (folder === 'Trash') return email.folderType.isTrash;
        else if (folder === 'Starred') return email.folderType.isStarred;
    })
    return Promise.resolve(filteredEmails);
}

function getById(emailId) {
    if (!gEmails || !gEmails.length) _createEmails();
    const email = gEmails.find(email => email.id === emailId);
    return Promise.resolve(email);
}

function removeEmail(emailId) {
    const emailIndex = gEmails.findIndex(email => email.id === emailId);
    gEmails[emailIndex].folderType.isTrash = true;
    gEmails[emailIndex].folderType.isInbox = false;
    gEmails[emailIndex].folderType.isStarred = false;
    utilsService.saveToStorage(EMAILS_INBOX_LOCALSTORAGE_KEY, gEmails);
}

function addEmail(subject, body) {
    var email = _createEmail(subject, body)
    gEmails.unshift(email);
    utilsService.saveToStorage(EMAILS_INBOX_LOCALSTORAGE_KEY, gEmails);
}

function setReadStatus(emailId, status = true) {
    const emailIndex = gEmails.findIndex(email => emailId === email.id);

    gEmails[emailIndex].isRead = status;
    utilsService.saveToStorage(EMAILS_INBOX_LOCALSTORAGE_KEY, gEmails);

}

function toggleStar(emailId) {
    const emailIndex = gEmails.findIndex(email => emailId === email.id);

    gEmails[emailIndex].folderType.isStarred = !gEmails[emailIndex].folderType.isStarred;
    utilsService.saveToStorage(EMAILS_INBOX_LOCALSTORAGE_KEY, gEmails);
}

export const emailService = {
    getEmails,
    getById,
    removeEmail,
    addEmail,
    setReadStatus,
    toggleStar
}