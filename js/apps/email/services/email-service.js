import { utilsService } from '../../../main-services/utils-service.js';

const EMAILS_LOCALSTORAGE_KEY = 'emails';
const gDefaultEmails = [
    {
        id: '1',
        subject: 'Wassap?',
        body: 'pick up!',
        isRead: false,
        sentAt: 1551133930594
    },
    {
        id: '2',
        subject: 'how are you?',
        body: 'pick up!',
        isRead: true,
        sentAt: 1551133930594
    }
];
var gEmails = [];

export const emailService = {
    getEmails,
    getById,
    removeEmail
}

function createEmails() {
    var emails = utilsService.loadFromStorage(EMAILS_LOCALSTORAGE_KEY);
    if (!emails || !emails.length) {
        emails = gDefaultEmails;
        utilsService.saveToStorage(EMAILS_LOCALSTORAGE_KEY, emails);
    }
    gEmails = emails;
}

function getEmails() {
    createEmails();
    return Promise.resolve(gEmails);
}

function getById(emailId) {
    if (!gEmails || !gEmails.length) createEmails();
    const email = gEmails.find(email => email.id === emailId);
    return Promise.resolve(email);
}

function removeEmail(emailId) {
    const emailIndex = gEmails.findIndex(email => email.id === emailId);
    gEmails.splice(emailIndex, 1);
}