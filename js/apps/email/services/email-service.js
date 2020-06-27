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
    },
    {
        id: utilsService.makeId(),
        subject: 'Zoom Meetings Security ',
        body: 'Dear Valued Customer, We are always striving to deliver you a secure virtual meeting environment. Starting April 4th, we have chosen to enable passwords on your meetings and turn on Waiting Rooms by default as additional security enhancements to protect your privacy. Meeting Passwords Enabled “On” Going forward, all meetings scheduled after April 4th will have password enabled. If your attendees are joining by clicking a meeting link with a password embedded, there will be no change to their joining experience.  For attendees who join meetings by manually entering a Meeting ID, they will need to enter a password to access the meeting.',
        isRead: false,
        sentAt: 'Apr 6',
        folderType: {
            isInbox: true,
            isStarred: false,
            isSent: false,
            isTrash: false
        }
    },
    {
        id: utilsService.makeId(),
        subject: 'Coding-Academy Challenge',
        body: 'Hi There! Thank you for expressing your interest in our special bootcamp program, we wish you a great success and hope to see you in our class soon!',
        isRead: true,
        sentAt: 'Apr 5',
        folderType: {
            isInbox: true,
            isStarred: false,
            isSent: false,
            isTrash: false
        }
    },
    {
        id: utilsService.makeId(),
        subject: 'Security alert',
        body: 'Your Appsus Account was just signed in to from a new Windows device You are getting this email to make sure it was you.',
        isRead: true,
        sentAt: 'Apr 2',
        folderType: {
            isInbox: true,
            isStarred: true,
            isSent: true,
            isTrash: false
        }
    },
    {
        id: utilsService.makeId(),
        subject: 'Please join Zoom meeting',
        body: 'Join Zoom Meeting',
        isRead: true,
        sentAt: 'Apr 23',
        folderType: {
            isInbox: false,
            isStarred: false,
            isSent: false,
            isTrash: true
        }
    },
    {
        id: utilsService.makeId(),
        subject: 'Reservation on 14.3.20',
        body: 'Hi, I would like to book a place on 14.3.20 at 7pm for two persons. Is it possible? Thanks!',
        isRead: false,
        sentAt: 'Feb 23',
        folderType: {
            isInbox: true,
            isStarred: false,
            isSent: true,
            isTrash: false
        }
    },
    {
        id: utilsService.makeId(),
        subject: 'Your next traval is here!',
        body: 'Find deals on hotels, homes, and much more... From cozy country homes to funky city apartments',
        isRead: false,
        sentAt: 'Dec 22',
        folderType: {
            isInbox: false,
            isStarred: false,
            isSent: false,
            isTrash: true
        }
    },
    {
        id: utilsService.makeId(),
        subject: 'Invitation',
        body: 'You have been invited to the an event.',
        isRead: false,
        sentAt: 'Dec 11',
        folderType: {
            isInbox: true,
            isStarred: true,
            isSent: true,
            isTrash: false
        }
    },
    {
        id: utilsService.makeId(),
        subject: 'Your order is on its way',
        body: 'Your order has been shipped and is on its way. Thanks for shopping with us.',
        isRead: false,
        sentAt: 'Nov 28',
        folderType: {
            isInbox: true,
            isStarred: false,
            isSent: true,
            isTrash: false
        }
    },
    {
        id: utilsService.makeId(),
        subject: 'Your order has been shipped',
        body: 'This is an e-mail notification to inform you that your order 98448355698530 has been shipped by the seller on 2019.02.16 20:31. You are advised to contact the seller for shipment information.',
        isRead: true,
        sentAt: 'Nov 20',
        folderType: {
            isInbox: true,
            isStarred: true,
            isSent: true,
            isTrash: false
        }
    },
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

function replyEmail(emailId, emailBody) {
    const emailIndex = gEmails.findIndex(email => email.id === emailId);

    if (!gEmails[emailIndex].subject.includes('Re: ')) {
        gEmails[emailIndex].subject = "Re: " + gEmails[emailIndex].subject;
    }

    gEmails[emailIndex].body = emailBody;
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
    toggleStar,
    replyEmail
}