// Sample data for inbox with extended details for modals - based on actual message structure
const allData = [
    {
        from: "Katie Conway (kfconway), UIUC Urbana / Champaign, AITS Admin",
        dateSent: "Tue 10/07/2025 10:00 PM",
        subject: "Lorem Ipsum",
        attachments: "nav states.png (45499 bytes)",
        status: "Sent",
        to: "Katie Conway (kfconway), UIUC Urbana / Champaign, AITS Admin",
        expiration: "This message expires after Sat 12/06/2025 09:00 PM",
        fromDetails: {
            enterprisePersonNameId: "Katie Conway",
            netIds: "kfconway@uillinois.edu, kfconway@illinois.edu"
        },
        toDetails: {
            enterprisePersonNameId: "Katie Conway",
            netIds: "kfconway@uillinois.edu, kfconway@illinois.edu"
        },
        messageDetails: {
            subject: "Lorem Ipsum",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            status: "Sent",
            dateSent: "Tue 10/07/2025 10:00 PM",
            expiration: "This message expires after Sat 12/06/2025 09:00 PM"
        },
        attachmentDetails: [
            { name: "nav states.png", size: "45499 bytes", type: "PNG Image" }
        ]
    },
    {
        from: "Jennifer Walsh (jwalsh), UIUC Urbana / Champaign, HR Director",
        dateSent: "Mon 10/06/2025 2:15 PM",
        subject: "Annual Performance Review Process - Action Required",
        attachments: "2 files",
        status: "Sent",
        to: "Katie Conway (kfconway), UIUC Urbana / Champaign, AITS Admin",
        expiration: "This message expires after Fri 11/06/2025 11:59 PM",
        fromDetails: {
            enterprisePersonNameId: "Jennifer Walsh",
            netIds: "jwalsh@uillinois.edu, jennifer.walsh@illinois.edu"
        },
        toDetails: {
            enterprisePersonNameId: "Katie Conway",
            netIds: "kfconway@uillinois.edu, kfconway@illinois.edu"
        },
        messageDetails: {
            subject: "Annual Performance Review Process - Action Required",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\nSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.\n\nNemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
            status: "Sent",
            dateSent: "Mon 10/06/2025 2:15 PM",
            expiration: "This message expires after Fri 11/06/2025 11:59 PM"
        },
        attachmentDetails: [
            { name: "Performance_Review_Guidelines.pdf", size: "2.3 MB", type: "PDF Document" },
            { name: "Self_Assessment_Form.docx", size: "856 KB", type: "Word Document" }
        ]
    },
    {
        from: "Marcus Williams (mwilliams), UIUC Urbana / Champaign, IT Operations",
        dateSent: "Sun 10/05/2025 9:30 AM",
        subject: "Brief system update",
        attachments: "None",
        status: "Sent",
        to: "Katie Conway (kfconway), UIUC Urbana / Champaign, AITS Admin",
        expiration: "This message expires after Wed 10/15/2025 5:00 PM",
        fromDetails: {
            enterprisePersonNameId: "Marcus Williams",
            netIds: "mwilliams@uillinois.edu, marcus.williams@illinois.edu"
        },
        toDetails: {
            enterprisePersonNameId: "Katie Conway",
            netIds: "kfconway@uillinois.edu, kfconway@illinois.edu"
        },
        messageDetails: {
            subject: "Brief system update",
            body: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
            status: "Sent",
            dateSent: "Sun 10/05/2025 9:30 AM",
            expiration: "This message expires after Wed 10/15/2025 5:00 PM"
        },
        attachmentDetails: []
    },
    {
        from: "Dr. Sarah Anderson (sanderson), UIUC Urbana / Champaign, Research Faculty",
        dateSent: "Fri 10/03/2025 4:45 PM",
        subject: "Comprehensive Research Collaboration Proposal and Timeline for Q4 Implementation",
        attachments: "4 files",
        status: "Sent",
        to: "Katie Conway (kfconway), UIUC Urbana / Champaign, AITS Admin",
        expiration: "This message expires after Mon 12/01/2025 8:00 AM",
        fromDetails: {
            enterprisePersonNameId: "Dr. Sarah Anderson",
            netIds: "sanderson@uillinois.edu, sarah.anderson@illinois.edu"
        },
        toDetails: {
            enterprisePersonNameId: "Katie Conway",
            netIds: "kfconway@uillinois.edu, kfconway@illinois.edu"
        },
        messageDetails: {
            subject: "Comprehensive Research Collaboration Proposal and Timeline for Q4 Implementation",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n\nExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.\n\nNemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.\n\nUt enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\n\nAt vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
            status: "Sent",
            dateSent: "Fri 10/03/2025 4:45 PM",
            expiration: "This message expires after Mon 12/01/2025 8:00 AM"
        },
        attachmentDetails: [
            { name: "Research_Proposal_Draft.pdf", size: "5.2 MB", type: "PDF Document" },
            { name: "Timeline_Analysis.xlsx", size: "1.8 MB", type: "Excel Spreadsheet" },
            { name: "Budget_Breakdown.pdf", size: "943 KB", type: "PDF Document" },
            { name: "Collaboration_Agreement.docx", size: "1.2 MB", type: "Word Document" }
        ]
    },
    {
        from: "Carlos Rodriguez (crodriguez), UIUC Urbana / Champaign, Finance",
        dateSent: "Thu 10/02/2025 11:20 AM",
        subject: "Hi",
        attachments: "None",
        status: "Sent",
        to: "Katie Conway (kfconway), UIUC Urbana / Champaign, AITS Admin",
        expiration: "This message expires after Sun 10/12/2025 12:00 PM",
        fromDetails: {
            enterprisePersonNameId: "Carlos Rodriguez",
            netIds: "crodriguez@uillinois.edu, carlos.rodriguez@illinois.edu"
        },
        toDetails: {
            enterprisePersonNameId: "Katie Conway",
            netIds: "kfconway@uillinois.edu, kfconway@illinois.edu"
        },
        messageDetails: {
            subject: "Hi",
            body: "Lorem ipsum.",
            status: "Sent",
            dateSent: "Thu 10/02/2025 11:20 AM",
            expiration: "This message expires after Sun 10/12/2025 12:00 PM"
        },
        attachmentDetails: []
    },
    {
        from: "Emily Thompson (ethompson), UIUC Urbana / Champaign, Operations Manager",
        dateSent: "Wed 10/01/2025 8:00 AM",
        subject: "Monthly Operations Report - September 2025 Summary and October Planning",
        attachments: "3 files",
        status: "Sent",
        to: "Katie Conway (kfconway), UIUC Urbana / Champaign, AITS Admin",
        expiration: "This message expires after Tue 10/28/2025 6:00 PM",
        fromDetails: {
            enterprisePersonNameId: "Emily Thompson",
            netIds: "ethompson@uillinois.edu, emily.thompson@illinois.edu"
        },
        toDetails: {
            enterprisePersonNameId: "Katie Conway",
            netIds: "kfconway@uillinois.edu, kfconway@illinois.edu"
        },
        messageDetails: {
            subject: "Monthly Operations Report - September 2025 Summary and October Planning",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\nSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
            status: "Sent",
            dateSent: "Wed 10/01/202025 8:00 AM",
            expiration: "This message expires after Tue 10/28/2025 6:00 PM"
        },
        attachmentDetails: [
            { name: "September_Operations_Report.pdf", size: "3.1 MB", type: "PDF Document" },
            { name: "October_Planning_Matrix.xlsx", size: "2.4 MB", type: "Excel Spreadsheet" },
            { name: "Performance_Metrics.pdf", size: "1.7 MB", type: "PDF Document" }
        ]
    },
    {
        from: "David Park (dpark), UIUC Urbana / Champaign, Strategic Planning",
        dateSent: "Tue 09/30/2025 3:30 PM",
        subject: "Re: Follow up from last week",
        attachments: "1 file",
        status: "Sent",
        to: "Katie Conway (kfconway), UIUC Urbana / Champaign, AITS Admin",
        expiration: "This message expires after Fri 11/28/2025 4:00 PM",
        fromDetails: {
            enterprisePersonNameId: "David Park",
            netIds: "dpark@uillinois.edu, david.park@illinois.edu"
        },
        toDetails: {
            enterprisePersonNameId: "Katie Conway",
            netIds: "kfconway@uillinois.edu, kfconway@illinois.edu"
        },
        messageDetails: {
            subject: "Re: Follow up from last week",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n\nExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            status: "Sent",
            dateSent: "Tue 09/30/2025 3:30 PM",
            expiration: "This message expires after Fri 11/28/2025 4:00 PM"
        },
        attachmentDetails: [
            { name: "Strategic_Analysis_Update.pdf", size: "2.8 MB", type: "PDF Document" }
        ]
    },
    {
        from: "Lisa Johnson (ljohnson), UIUC Urbana / Champaign, Compliance Officer",
        dateSent: "Mon 09/29/2025 1:45 PM",
        subject: "Quick question about accessibility compliance standards for new portal interface",
        attachments: "None",
        status: "Sent",
        to: "Katie Conway (kfconway), UIUC Urbana / Champaign, AITS Admin",
        expiration: "This message expires after Thu 10/09/2025 2:00 PM",
        fromDetails: {
            enterprisePersonNameId: "Lisa Johnson",
            netIds: "ljohnson@uillinois.edu, lisa.johnson@illinois.edu"
        },
        toDetails: {
            enterprisePersonNameId: "Katie Conway",
            netIds: "kfconway@uillinois.edu, kfconway@illinois.edu"
        },
        messageDetails: {
            subject: "Quick question about accessibility compliance standards for new portal interface",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.\n\nTotam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
            status: "Sent",
            dateSent: "Mon 09/29/2025 1:45 PM",
            expiration: "This message expires after Thu 10/09/2025 2:00 PM"
        },
        attachmentDetails: []
    },
    {
        from: "Prof. Michael Chen (mchen), UIUC Urbana / Champaign, Computer Science",
        dateSent: "Sun 09/28/2025 7:15 PM",
        subject: "Test message for new system functionality",
        attachments: "5 files",
        status: "Sent",
        to: "Katie Conway (kfconway), UIUC Urbana / Champaign, AITS Admin",
        expiration: "This message expires after Sat 01/25/2026 11:59 PM",
        fromDetails: {
            enterprisePersonNameId: "Prof. Michael Chen",
            netIds: "mchen@uillinois.edu, michael.chen@illinois.edu"
        },
        toDetails: {
            enterprisePersonNameId: "Katie Conway",
            netIds: "kfconway@uillinois.edu, kfconway@illinois.edu"
        },
        messageDetails: {
            subject: "Test message for new system functionality",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\nSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\n\nNeque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.\n\nQuis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.\n\nSimilique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
            status: "Sent",
            dateSent: "Sun 09/28/2025 7:15 PM",
            expiration: "This message expires after Sat 01/25/2026 11:59 PM"
        },
        attachmentDetails: [
            { name: "System_Test_Results.pdf", size: "4.7 MB", type: "PDF Document" },
            { name: "Code_Review_Notes.txt", size: "125 KB", type: "Text File" },
            { name: "Database_Schema.sql", size: "68 KB", type: "SQL File" },
            { name: "User_Interface_Mockups.png", size: "2.1 MB", type: "PNG Image" },
            { name: "Technical_Specifications.docx", size: "3.3 MB", type: "Word Document" }
        ]
    }
];

// Sample data for Inbox Archive
const inboxArchiveData = [
    {
        from: "Maria Santos (msantos), UIUC Urbana / Champaign, Library Services",
        dateSent: "Wed 09/15/2025 3:22 PM",
        subject: "Library System Maintenance - Archived",
        attachments: "1 file",
        status: "Archived",
        to: "Katie Conway (kfconway), UIUC Urbana / Champaign, AITS Admin",
        expiration: "This message expired on Thu 10/15/2025 3:22 PM",
        fromDetails: {
            enterprisePersonNameId: "Maria Santos",
            netIds: "msantos@uillinois.edu, maria.santos@illinois.edu"
        },
        messageDetails: {
            subject: "Library System Maintenance - Archived",
            body: "The library system maintenance has been completed. All services are now restored.",
            status: "Archived",
            dateSent: "Wed 09/15/2025 3:22 PM"
        },
        attachmentDetails: [
            { name: "Maintenance_Report.pdf", size: "842 KB", type: "PDF Document" }
        ]
    }
];

// Sample data for Sent Messages
const sentData = [
    {
        from: "Katie Conway (kfconway), UIUC Urbana / Champaign, AITS Admin",
        dateSent: "Tue 10/08/2025 1:15 PM",
        subject: "Meeting Reminder - Weekly Team Sync",
        attachments: "None",
        status: "Sent",
        to: "Jennifer Walsh (jwalsh), UIUC Urbana / Champaign, HR Director",
        expiration: "This message expires after Thu 12/07/2025 1:15 PM",
        toDetails: {
            enterprisePersonNameId: "Jennifer Walsh",
            netIds: "jwalsh@uillinois.edu, jennifer.walsh@illinois.edu"
        },
        messageDetails: {
            subject: "Meeting Reminder - Weekly Team Sync",
            body: "Hi Jennifer, just a reminder about our weekly team sync scheduled for tomorrow at 2 PM. Looking forward to discussing the new project initiatives.",
            status: "Sent",
            dateSent: "Tue 10/08/2025 1:15 PM",
            expiration: "This message expires after Thu 12/07/2025 1:15 PM"
        },
        attachmentDetails: []
    },
    {
        from: "Katie Conway (kfconway), UIUC Urbana / Champaign, AITS Admin",
        dateSent: "Mon 10/07/2025 9:30 AM",
        subject: "System Update Notification",
        attachments: "2 files",
        status: "Sent",
        to: "Marcus Williams (mwilliams), UIUC Urbana / Champaign, IT Operations",
        expiration: "This message expires after Wed 12/06/2025 9:30 AM",
        toDetails: {
            enterprisePersonNameId: "Marcus Williams",
            netIds: "mwilliams@uillinois.edu, marcus.williams@illinois.edu"
        },
        messageDetails: {
            subject: "System Update Notification",
            body: "The scheduled system update has been completed successfully. Please review the attached documentation for any changes that may affect your workflow.",
            status: "Sent",
            dateSent: "Mon 10/07/2025 9:30 AM",
            expiration: "This message expires after Wed 12/06/2025 9:30 AM"
        },
        attachmentDetails: [
            { name: "Update_Summary.pdf", size: "1.2 MB", type: "PDF Document" },
            { name: "Change_Log.txt", size: "45 KB", type: "Text File" }
        ]
    },
    {
        from: "Katie Conway (kfconway), UIUC Urbana / Champaign, AITS Admin",
        dateSent: "Fri 10/04/2025 3:45 PM",
        subject: "Budget Approval Request - IT Equipment",
        attachments: "3 files",
        status: "Sent",
        to: "Carlos Rodriguez (crodriguez), UIUC Urbana / Champaign, Finance",
        expiration: "This message expires after Sun 01/02/2026 3:45 PM",
        toDetails: {
            enterprisePersonNameId: "Carlos Rodriguez",
            netIds: "crodriguez@uillinois.edu, carlos.rodriguez@illinois.edu"
        },
        messageDetails: {
            subject: "Budget Approval Request - IT Equipment",
            body: "Carlos, I'm submitting the budget approval request for the new IT equipment we discussed in last week's meeting. The total cost is within our allocated budget for Q4. Please review the attached documents and let me know if you need any additional information for the approval process.",
            status: "Sent",
            dateSent: "Fri 10/04/2025 3:45 PM",
            expiration: "This message expires after Sun 01/02/2026 3:45 PM"
        },
        attachmentDetails: [
            { name: "IT_Equipment_Budget_Request.pdf", size: "1.8 MB", type: "PDF Document" },
            { name: "Vendor_Quotations.xlsx", size: "945 KB", type: "Excel Spreadsheet" },
            { name: "Equipment_Specifications.docx", size: "1.2 MB", type: "Word Document" }
        ]
    }
];

// Sample data for Sent Archive
const sentArchiveData = [
    {
        from: "Katie Conway (kfconway), UIUC Urbana / Champaign, AITS Admin",
        dateSent: "Thu 08/15/2025 4:45 PM",
        subject: "Q3 Project Summary - Archived",
        attachments: "3 files",
        status: "Archived",
        to: "Dr. Sarah Anderson (sanderson), UIUC Urbana / Champaign, Research Faculty",
        expiration: "This message expired on Sat 10/14/2025 4:45 PM",
        toDetails: {
            enterprisePersonNameId: "Dr. Sarah Anderson",
            netIds: "sanderson@uillinois.edu, sarah.anderson@illinois.edu"
        },
        messageDetails: {
            subject: "Q3 Project Summary - Archived",
            body: "Please find attached the Q3 project summary and related documentation. This message has been archived as it has reached its expiration date.",
            status: "Archived",
            dateSent: "Thu 08/15/2025 4:45 PM"
        },
        attachmentDetails: [
            { name: "Q3_Summary.pdf", size: "2.8 MB", type: "PDF Document" },
            { name: "Project_Metrics.xlsx", size: "1.4 MB", type: "Excel Spreadsheet" },
            { name: "Budget_Analysis.pdf", size: "967 KB", type: "PDF Document" }
        ]
    }
];

// Sample data for Draft Messages
const draftsData = [
    {
        from: "Katie Conway (kfconway), UIUC Urbana / Champaign, AITS Admin",
        dateSent: "Draft created Tue 10/08/2025 11:22 AM",
        subject: "Draft: Budget Proposal for New Equipment",
        attachments: "1 file",
        status: "Draft",
        to: "Carlos Rodriguez (crodriguez), UIUC Urbana / Champaign, Finance",
        expiration: "Draft - No expiration until sent",
        toDetails: {
            enterprisePersonNameId: "Carlos Rodriguez",
            netIds: "crodriguez@uillinois.edu, carlos.rodriguez@illinois.edu"
        },
        messageDetails: {
            subject: "Budget Proposal for New Equipment",
            body: "Carlos, I'm preparing the budget proposal for the new equipment we discussed. Please review the preliminary numbers and let me know your thoughts. I'll send the final version once I have your feedback.\n\n[This is a draft message - not yet sent]",
            status: "Draft",
            dateSent: "Draft created Tue 10/08/2025 11:22 AM",
            expiration: "Draft - No expiration until sent"
        },
        attachmentDetails: [
            { name: "Equipment_Budget_Draft.xlsx", size: "734 KB", type: "Excel Spreadsheet" }
        ]
    },
    {
        from: "Katie Conway (kfconway), UIUC Urbana / Champaign, AITS Admin",
        dateSent: "Draft created Mon 10/07/2025 2:18 PM",
        subject: "Draft: Follow-up on Training Schedule",
        attachments: "None",
        status: "Draft",
        to: "Emily Thompson (ethompson), UIUC Urbana / Champaign, Operations Manager",
        expiration: "Draft - No expiration until sent",
        toDetails: {
            enterprisePersonNameId: "Emily Thompson",
            netIds: "ethompson@uillinois.edu, emily.thompson@illinois.edu"
        },
        messageDetails: {
            subject: "Follow-up on Training Schedule",
            body: "Emily, wanted to follow up on the training schedule we discussed last week. Are you still available for the sessions on the 15th and 16th?\n\n[This is a draft message - not yet sent]",
            status: "Draft",
            dateSent: "Draft created Mon 10/07/2025 2:18 PM",
            expiration: "Draft - No expiration until sent"
        },
        attachmentDetails: []
    }
];

let currentData = [...allData];
let currentPage = 1;
let recordsPerPage = 5;

// Store the element that was focused before opening the modal
let previouslyFocusedElement = null;

// Modal functionality
function openModal(modalId, data, type) {
    const originalModal = document.getElementById(modalId);
    if (!originalModal) return;

    // Store the currently focused element to return focus later
    previouslyFocusedElement = document.activeElement;

    // Clone the modal to avoid moving the original
    const modal = originalModal.cloneNode(true);

    // Populate modal content based on type using template-based approach
    // Skip template population for notification modal as it uses static HTML
    const contentDiv = modal.querySelector(`#${modalId.replace('Modal', '')}-modal-content`);
    if (contentDiv && modalId !== 'notificationModal') {
        populateModalFromTemplate(contentDiv, data, type);
    }

    // Update close button to work with the cloned modal
    const closeButton = modal.querySelector('.ptn-modal-close');
    if (closeButton) {
        closeButton.onclick = () => closeModal(modalId);
    }

    // Create overlay
    const overlay = document.createElement('div');
    overlay.className = 'ptn-modal-overlay';
    overlay.setAttribute('data-modal-id', modalId);
    overlay.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.5);
                z-index: 1000;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 20px;
                box-sizing: border-box;
            `;

    // Style the modal
    modal.style.cssText = `
                background: white;
                border-radius: 8px;
                max-width: 600px;
                width: 100%;
                max-height: 80vh;
                overflow-y: auto;
                position: relative;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
                display: block;
            `;

    // Make modal focusable and add ARIA attributes
    modal.setAttribute('tabindex', '-1');
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');

    // Set aria-labelledby if there's a title
    const title = modal.querySelector('h2, h3, .modal-title');
    if (title && !title.id) {
        title.id = `modal-title-${Date.now()}`;
        modal.setAttribute('aria-labelledby', title.id);
    }

    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    // Disable background scrolling
    document.body.style.overflow = 'hidden';

    // Set up focus trapping
    setupFocusTrap(modal, overlay);

    // Delay focus to ensure modal is fully rendered
    setTimeout(() => focusFirstElement(modal), 0);

    // Close on overlay click
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            closeModal(modalId);
        }
    });

    // Close on Escape key
    const handleEscape = (e) => {
        if (e.key === 'Escape') {
            closeModal(modalId);
        }
    };
    document.addEventListener('keydown', handleEscape);

    // Store the escape handler for cleanup
    overlay.escapeHandler = handleEscape;
}

function closeModal(modalId) {
    const overlay = document.querySelector('.ptn-modal-overlay');
    if (overlay) {
        // Remove escape key listener
        if (overlay.escapeHandler) {
            document.removeEventListener('keydown', overlay.escapeHandler);
        }

        // Remove focus trap listeners
        if (overlay.focusTrapHandler) {
            document.removeEventListener('keydown', overlay.focusTrapHandler);
        }
        if (overlay.focusOutHandler) {
            document.removeEventListener('focusin', overlay.focusOutHandler);
        }

        // Remove the modal
        document.body.removeChild(overlay);

        // Restore background scrolling
        document.body.style.overflow = '';

        // Return focus to the previously focused element
        if (previouslyFocusedElement) {
            previouslyFocusedElement.focus();
            previouslyFocusedElement = null;
        }
    }
}

// Global variable to store the message data for archive confirmation
let pendingArchiveData = null;

// Function to show archive confirmation modal
function showArchiveConfirmation(messageData) {
    pendingArchiveData = messageData;
    openModal('archiveConfirmModal');
}

// Function to confirm archive action
function confirmArchiveMessage() {
    if (pendingArchiveData) {
        // Perform archive action
        console.log('Archiving message:', pendingArchiveData);

        // Close the confirmation modal
        closeModal('archiveConfirmModal');

        // Clear pending data
        pendingArchiveData = null;

        // Show success message (you can customize this)
        alert('Message has been archived successfully.');

        // Optional: Refresh the table or move to archive tab
        // You could add logic here to update the UI after archiving
    }
}

// Function to show archive confirmation modal
function showArchiveModal() {
    // Check which messages are selected
    const selectedMessages = getSelectedMessages();

    if (selectedMessages.length === 0) {
        alert('Please select at least one message to archive.');
        return;
    }

    // Store the selected messages for confirmation
    pendingArchiveData = {
        messages: selectedMessages,
        count: selectedMessages.length
    };

    // Update modal content to show how many messages will be archived
    const modal = document.getElementById('archiveConfirmModal');
    const content = modal.querySelector('#archive-modal-content p');
    if (content) {
        if (selectedMessages.length === 1) {
            content.textContent = 'Are you sure you want to archive this message? It will still be accessible to the sender and all recipients.';
        } else {
            content.textContent = `Are you sure you want to archive these messages? They will still be accessible to the sender and all recipients.`;
        }
    }

    // Open the modal using the existing modal system
    openModal('archiveConfirmModal', null, 'archive');
}

// Helper function to get selected messages
function getSelectedMessages() {
    const selectedMessages = [];
    const checkboxes = document.querySelectorAll('input[name="row-select"]:checked');

    checkboxes.forEach(checkbox => {
        const row = checkbox.closest('tr');
        if (row) {
            const fromButton = row.querySelector('[data-cell="From"] button, [data-cell="To"] button');
            const subjectButton = row.querySelector('[data-cell="Subject"] button');

            if (fromButton && subjectButton) {
                selectedMessages.push({
                    from: fromButton.textContent.trim(),
                    subject: subjectButton.textContent.trim(),
                    row: row,
                    checkbox: checkbox
                });
            }
        }
    });

    return selectedMessages;
}



// Focus trap functionality
function setupFocusTrap(modal, overlay) {
    const focusableSelector = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

    const handleFocusTrap = (e) => {
        // Only handle Tab key
        if (e.key !== 'Tab') return;

        // Get all focusable elements within the modal
        const focusableElements = modal.querySelectorAll(focusableSelector);
        const firstFocusable = focusableElements[0];
        const lastFocusable = focusableElements[focusableElements.length - 1];

        // If no focusable elements, prevent tabbing
        if (focusableElements.length === 0) {
            e.preventDefault();
            modal.focus();
            return;
        }

        // Check if current focus is within the modal
        const isWithinModal = modal.contains(document.activeElement);

        if (!isWithinModal) {
            // If focus has escaped the modal, bring it back
            e.preventDefault();
            firstFocusable.focus();
            return;
        }

        if (e.shiftKey) {
            // Shift + Tab: moving backwards
            if (document.activeElement === firstFocusable) {
                e.preventDefault();
                lastFocusable.focus();
            }
        } else {
            // Tab: moving forwards
            if (document.activeElement === lastFocusable) {
                e.preventDefault();
                firstFocusable.focus();
            }
        }
    };

    // Also listen for focus events to catch any attempts to focus outside the modal
    const handleFocusOut = (e) => {
        if (!modal.contains(e.target)) {
            e.preventDefault();
            const focusableElements = modal.querySelectorAll(focusableSelector);
            if (focusableElements.length > 0) {
                focusableElements[0].focus();
            } else {
                modal.focus();
            }
        }
    };

    document.addEventListener('keydown', handleFocusTrap);
    document.addEventListener('focusin', handleFocusOut);

    // Store the handlers for cleanup
    overlay.focusTrapHandler = handleFocusTrap;
    overlay.focusOutHandler = handleFocusOut;
}

function focusFirstElement(modal) {
    const focusableSelector = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    const focusableElements = modal.querySelectorAll(focusableSelector);

    if (focusableElements.length > 0) {
        focusableElements[0].focus();
    } else {
        modal.focus();
    }
}

// Enhance focus trapping for modals
function enableFocusTrap(modal) {
    const focusableElements = modal.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    function trapFocus(event) {
        if (event.key === 'Tab') {
            if (event.shiftKey) {
                // Shift + Tab
                if (document.activeElement === firstElement) {
                    event.preventDefault();
                    lastElement.focus();
                }
            } else {
                // Tab
                if (document.activeElement === lastElement) {
                    event.preventDefault();
                    firstElement.focus();
                }
            }
        }
    }

    modal.addEventListener('keydown', trapFocus);

    // Cleanup function to remove event listener
    modal.addEventListener('modalClose', () => {
        modal.removeEventListener('keydown', trapFocus);
    });
}

// New template-based modal content population function
function populateModalFromTemplate(contentDiv, data, type) {
    let template;

    switch (type) {
        case 'message':
            template = document.getElementById('modal-message-template');
            break;
        case 'contact':
            // For contact type, we'll create content manually since there's no template
            const enterprisePersonNameId = data.fromDetails?.enterprisePersonNameId ||
                data.toDetails?.enterprisePersonNameId ||
                data.from ||
                'Not available';
            const netIds = data.fromDetails?.netIds ||
                data.toDetails?.netIds ||
                'Not available';

            contentDiv.innerHTML = `
                        <div class="modal-detail-item">
                            <div class="modal-detail-label">Enterprise Person name ID</div>
                            <div class="modal-detail-value">${enterprisePersonNameId}</div>
                        </div>
                        <div class="modal-detail-item">
                            <div class="modal-detail-label">Net IDs</div>
                            <div class="modal-detail-value">${netIds}</div>
                        </div>
                    `;
            enableFocusTrap(contentDiv.parentElement);
            return;
        case 'attachments':
            if (!data.attachmentDetails || data.attachmentDetails.length === 0) {
                contentDiv.innerHTML = `
                            <div class="modal-detail-item">
                                <div class="modal-detail-value modal-no-attachments-centered">
                                    No attachments found for this message.
                                </div>
                            </div>
                        `;
                enableFocusTrap(contentDiv.parentElement);
                return;
            }
            contentDiv.innerHTML = `
                        <div class="modal-detail-item">
                            <div class="modal-detail-label">Attachments (${data.attachmentDetails.length})</div>
                            <ul class="modal-attachment-list">
                                ${data.attachmentDetails.map(attachment => `
                                    <li class="modal-attachment-item">
                                        <div>
                                            <div class="modal-attachment-name">${attachment.name}</div>
                                            <div class="modal-attachment-size">${attachment.size}</div>
                                        </div>
                                        
                                    </li>
                                `).join('')}
                            </ul>
                        </div>
                    `;
            enableFocusTrap(contentDiv.parentElement);
            return;
        default:
            contentDiv.innerHTML = '<p>No additional information available.</p>';
            enableFocusTrap(contentDiv.parentElement);
            return;
    }

    if (template) {
        // Clone the template content
        const templateContent = template.content.cloneNode(true);

        // Populate the template fields with data
        const fields = templateContent.querySelectorAll('[data-field]');
        fields.forEach(field => {
            const fieldName = field.getAttribute('data-field');
            let value = '';

            switch (fieldName) {
                case 'status':
                    value = data.messageDetails?.status || data.status || 'Unknown';
                    break;
                case 'dateSent':
                    value = data.messageDetails?.dateSent || data.dateSent || 'Unknown';
                    break;
                case 'from':
                    value = data.from || 'Unknown';
                    break;
                case 'to':
                    value = data.to || 'Unknown';
                    break;
                case 'subject':
                    value = data.messageDetails?.subject || data.subject || 'Unknown';
                    break;
                case 'body':
                    value = data.messageDetails?.body || 'No message body available';
                    break;
                case 'attachments':
                    if (data.attachmentDetails && data.attachmentDetails.length > 0) {
                        value = `<ul class="modal-attachment-list">
                                    ${data.attachmentDetails.map(attachment => `
                                        <li class="modal-attachment-item">
                                            <div>
                                                <a href="#" onclick="window.open('#', '_blank'); return false;" class="modal-attachment-name modal-attachment-link">${attachment.name}</a>
                                                <div class="modal-attachment-size">${attachment.size}</div>
                                            </div>
                                        </li>
                                    `).join('')}
                                </ul>`;
                    } else {
                        value = '<span class="modal-no-attachments">No attachments</span>';
                    }
                    break;
                case 'expiration':
                    value = data.messageDetails?.expiration || data.expiration || 'Unknown';
                    break;
                default:
                    value = 'Not available';
            }

            field.innerHTML = value;
        });

        // Clear content div and append populated template
        contentDiv.innerHTML = '';
        contentDiv.appendChild(templateContent);
        enableFocusTrap(contentDiv.parentElement);
    }
}



// Keep the old function for backward compatibility, but it should not be used for new implementations
function getModalContent(data, type) {
    switch (type) {
        case 'contact':
            // Handle cases where fromDetails might not exist (e.g., sent messages)
            const enterprisePersonNameId = data.fromDetails?.enterprisePersonNameId ||
                data.toDetails?.enterprisePersonNameId ||
                data.from ||
                'Not available';
            const netIds = data.fromDetails?.netIds ||
                data.toDetails?.netIds ||
                'Not available';

            return `
                        <div class="modal-detail-item">
                            <div class="modal-detail-label">Enterprise Person name ID</div>
                            <div class="modal-detail-value">${enterprisePersonNameId}</div>
                        </div>
                        <div class="modal-detail-item">
                            <div class="modal-detail-label">Net IDs</div>
                            <div class="modal-detail-value">${netIds}</div>
                        </div>
                    `;
        case 'message':
            const attachmentsList = data.attachmentDetails && data.attachmentDetails.length > 0 ?
                `<ul class="modal-attachment-list">
                            ${data.attachmentDetails.map(attachment => `
                                <li class="modal-attachment-item">
                                    <div>
                                        <a href="#" onclick="window.open('#', '_blank'); return false;" class="modal-attachment-name modal-attachment-link">${attachment.name}</a>
                                        <div class="modal-attachment-size">${attachment.size}</div>
                                    </div>
                                    
                                </li>
                            `).join('')}
                        </ul>` :
                `<span class="modal-no-attachments">No attachments</span>`;

            return `
                        <div class="modal-detail-item">
                            <div class="modal-detail-label">Status</div>
                            <div class="modal-detail-value">${data.messageDetails?.status || data.status || 'Unknown'}</div>
                        </div>
                        <div class="modal-detail-item">
                            <div class="modal-detail-label">Date Sent</div>
                            <div class="modal-detail-value">${data.messageDetails?.dateSent || data.dateSent || 'Unknown'}</div>
                        </div>
                        <div class="modal-detail-item">
                            <div class="modal-detail-label">From</div>
                            <div class="modal-detail-value">${data.from || 'Unknown'}</div>
                        </div>
                        <div class="modal-detail-item">
                            <div class="modal-detail-label">To</div>
                            <div class="modal-detail-value">${data.to || 'Unknown'}</div>
                        </div>
                        <div class="modal-detail-item">
                            <div class="modal-detail-label">Subject</div>
                            <div class="modal-detail-value">${data.messageDetails?.subject || data.subject || 'Unknown'}</div>
                        </div>
                        <div class="modal-detail-item">
                            <div class="modal-detail-label">Body</div>
                            <div class="modal-detail-value modal-message-body">${data.messageDetails?.body || 'No message body available'}</div>
                        </div>
                        <div class="modal-detail-item">
                            <div class="modal-detail-label">Attachments</div>
                            <div class="modal-detail-value">${attachmentsList}</div>
                        </div>
                        <div class="modal-detail-item">
                            <div class="modal-detail-label">Expiration</div>
                            <div class="modal-detail-value">${data.messageDetails?.expiration || data.expiration || 'Unknown'}</div>
                        </div>
                    `;
        case 'attachments':
            if (!data.attachmentDetails || data.attachmentDetails.length === 0) {
                return `
                            <div class="modal-detail-item">
                                <div class="modal-detail-value modal-no-attachments-centered">
                                    No attachments found for this message.
                                </div>
                            </div>
                        `;
            }
            return `
                        <div class="modal-detail-item">
                            <div class="modal-detail-label">Attachments (${data.attachmentDetails.length})</div>
                            <ul class="modal-attachment-list">
                                ${data.attachmentDetails.map(attachment => `
                                    <li class="modal-attachment-item">
                                        <div>
                                            <div class="modal-attachment-name">${attachment.name}</div>
                                            <div class="modal-attachment-size">${attachment.size}</div>
                                        </div>
                                        
                                    </li>
                                `).join('')}
                            </ul>
                        </div>
                    `;
        default:
            return '<p>No additional information available.</p>';
    }
}

// Legacy function for backwards compatibility - can be removed once all references are updated
function getModalContentLegacy(data, type) {
    switch (type) {
        case 'contact':
            // Handle cases where fromDetails might not exist (e.g., sent messages)
            const enterprisePersonNameId = data.fromDetails?.enterprisePersonNameId ||
                data.toDetails?.enterprisePersonNameId ||
                data.from ||
                'Not available';
            const netIds = data.fromDetails?.netIds ||
                data.toDetails?.netIds ||
                'Not available';

            return `
                        <div class="modal-detail-item">
                            <div class="modal-detail-label">Enterprise Person name ID</div>
                            <div class="modal-detail-value">${enterprisePersonNameId}</div>
                        </div>
                        <div class="modal-detail-item">
                            <div class="modal-detail-label">Net IDs</div>
                            <div class="modal-detail-value">${netIds}</div>
                        </div>
                    `;
        case 'message':
            const attachmentsList = data.attachmentDetails && data.attachmentDetails.length > 0 ?
                `<ul class="modal-attachment-list">
                            ${data.attachmentDetails.map(attachment => `
                                <li class="modal-attachment-item">
                                    <div>
                                        <a href="#" onclick="window.open('#', '_blank'); return false;" class="modal-attachment-name modal-attachment-link">${attachment.name}</a>
                                        <div class="modal-attachment-size">${attachment.size}</div>
                                    </div>
                                    
                                </li>
                            `).join('')}
                        </ul>` :
                `<span class="modal-no-attachments">No attachments</span>`;

            return `
                        <div class="modal-detail-item">
                            <div class="modal-detail-label">Status</div>
                            <div class="modal-detail-value">${data.messageDetails?.status || data.status || 'Unknown'}</div>
                        </div>
                        <div class="modal-detail-item">
                            <div class="modal-detail-label">Date Sent</div>
                            <div class="modal-detail-value">${data.messageDetails?.dateSent || data.dateSent || 'Unknown'}</div>
                        </div>
                        <div class="modal-detail-item">
                            <div class="modal-detail-label">From</div>
                            <div class="modal-detail-value">${data.from || 'Unknown'}</div>
                        </div>
                        <div class="modal-detail-item">
                            <div class="modal-detail-label">To</div>
                            <div class="modal-detail-value">${data.to || 'Unknown'}</div>
                        </div>
                        <div class="modal-detail-item">
                            <div class="modal-detail-label">Subject</div>
                            <div class="modal-detail-value">${data.messageDetails?.subject || data.subject || 'Unknown'}</div>
                        </div>
                        <div class="modal-detail-item">
                            <div class="modal-detail-label">Body</div>
                            <div class="modal-detail-value modal-message-body">${data.messageDetails?.body || 'No message body available'}</div>
                        </div>
                        <div class="modal-detail-item">
                            <div class="modal-detail-label">Attachments</div>
                            <div class="modal-detail-value">${attachmentsList}</div>
                        </div>
                        <div class="modal-detail-item">
                            <div class="modal-detail-label">Expiration</div>
                            <div class="modal-detail-value">${data.messageDetails?.expiration || data.expiration || 'Unknown'}</div>
                        </div>
                    `;
        case 'attachments':
            if (!data.attachmentDetails || data.attachmentDetails.length === 0) {
                return `
                            <div class="modal-detail-item">
                                <div class="modal-detail-value modal-no-attachments-centered">
                                    No attachments found for this message.
                                </div>
                            </div>
                        `;
            }
            return `
                        <div class="modal-detail-item">
                            <div class="modal-detail-label">Attachments (${data.attachmentDetails.length})</div>
                            <ul class="modal-attachment-list">
                                ${data.attachmentDetails.map(attachment => `
                                    <li class="modal-attachment-item">
                                        <div>
                                            <div class="modal-attachment-name">${attachment.name}</div>
                                            <div class="modal-attachment-size">${attachment.size}</div>
                                        </div>
                                        
                                    </li>
                                `).join('')}
                            </ul>
                        </div>
                    `;
        default:
            return '<p>No additional information available.</p>';
    }
}

// In-tab message detail view functions
function showMessageDetail(data, type) {
    const activePanel = document.querySelector('.ptn-vtabpanel.ptn-active');
    if (!activePanel) return;

    // Add class to hide table view and show message detail view
    activePanel.classList.add('ptn-showing-message-detail');

    // Find the message detail view within the active panel
    const messageDetailView = activePanel.querySelector('.ptn-message-detail-view');
    if (!messageDetailView) return;

    // Populate the message detail view with data
    populateMessageDetailView(messageDetailView, data, type);

    // Focus the back button for accessibility
    const backButton = messageDetailView.querySelector('.ptn-message-detail-back-btn');
    if (backButton) {
        backButton.focus();
    }

    // Announce change for screen readers
    announceChange('Message details opened');
}

function showTableView(panelId) {
    const panel = document.getElementById(panelId);
    if (!panel) return;

    // Remove class to show table view and hide message detail view
    panel.classList.remove('ptn-showing-message-detail');

    // Return focus to the table for accessibility
    const table = panel.querySelector('.ptn-table');
    if (table) {
        table.focus();
    }

    // Announce change for screen readers
    announceChange('Returned to message table');
}

function populateMessageDetailView(messageDetailView, data, type) {
    // Update the header title based on type
    const title = messageDetailView.querySelector('.ptn-message-detail-title');
    if (title) {
        switch (type) {
            case 'contact':
                title.textContent = 'Contact Details';
                break;
            case 'attachments':
                title.textContent = 'Attachments';
                break;
            default:
                title.textContent = 'Message Details';
        }
    }

    if (type === 'contact') {
        // Handle contact details view - show different fields
        const content = messageDetailView.querySelector('.ptn-message-detail-content');
        if (content) {
            const enterprisePersonNameId = data.fromDetails?.enterprisePersonNameId ||
                data.toDetails?.enterprisePersonNameId ||
                data.from ||
                'Not available';
            const netIds = data.fromDetails?.netIds ||
                data.toDetails?.netIds ||
                'Not available';

            content.innerHTML = `
                        <div class="ptn-message-detail-field">
                            <div class="ptn-message-detail-label">Enterprise Person Name ID</div>
                            <div class="ptn-message-detail-value">${enterprisePersonNameId}</div>
                        </div>
                        <div class="ptn-message-detail-field">
                            <div class="ptn-message-detail-label">Net IDs</div>
                            <div class="ptn-message-detail-value">${netIds}</div>
                        </div>
                    `;
        }
        // Hide actions for contact view
        const actions = messageDetailView.querySelector('.ptn-message-detail-actions');
        if (actions) actions.style.display = 'none';
        return;
    }

    if (type === 'attachments') {
        // Handle attachments view
        const content = messageDetailView.querySelector('.ptn-message-detail-content');
        if (content) {
            if (!data.attachmentDetails || data.attachmentDetails.length === 0) {
                content.innerHTML = `
                            <div class="ptn-message-detail-field">
                                <div class="ptn-message-detail-value">
                                    <div style="text-align: center; color: #6b7280; font-style: italic;">
                                        No attachments found for this message.
                                    </div>
                                </div>
                            </div>
                        `;
            } else {
                content.innerHTML = `
                            <div class="ptn-message-detail-field">
                                <div class="ptn-message-detail-label">Attachments (${data.attachmentDetails.length})</div>
                                <div class="ptn-message-detail-value">
                                    <ul class="modal-attachment-list">
                                        ${data.attachmentDetails.map(attachment => `
                                            <li class="modal-attachment-item">
                                                <div>
                                                    <div class="modal-attachment-name">${attachment.name}</div>
                                                    <div class="modal-attachment-size">${attachment.size}</div>
                                                </div>
                                            </li>
                                        `).join('')}
                                    </ul>
                                </div>
                            </div>
                        `;
            }
        }
        // Hide actions for attachments view
        const actions = messageDetailView.querySelector('.ptn-message-detail-actions');
        if (actions) actions.style.display = 'none';
        return;
    }

    // Default message details view
    const fields = messageDetailView.querySelectorAll('[data-field]');
    fields.forEach(field => {
        const fieldName = field.getAttribute('data-field');
        let value = '';

        switch (fieldName) {
            case 'status':
                value = data.messageDetails?.status || data.status || 'Unknown';
                break;
            case 'dateSent':
                value = data.messageDetails?.dateSent || data.dateSent || 'Unknown';
                break;
            case 'from':
                value = data.from || 'Unknown';
                break;
            case 'to':
                value = data.to || 'Unknown';
                break;
            case 'subject':
                value = data.messageDetails?.subject || data.subject || 'Unknown';
                break;
            case 'body':
                value = data.messageDetails?.body || data.body || 'No message body available';
                break;
            case 'attachments':
                if (data.attachmentDetails && data.attachmentDetails.length > 0) {
                    value = `<ul class="modal-attachment-list">
                                ${data.attachmentDetails.map(attachment => `
                                    <li class="modal-attachment-item">
                                        <div>
                                            <a href="#" onclick="window.open('#', '_blank'); return false;" class="modal-attachment-name modal-attachment-link">${attachment.name}</a>
                                            <div class="modal-attachment-size">${attachment.size}</div>
                                        </div>
                                    </li>
                                `).join('')}
                            </ul>`;
                } else {
                    value = '<span class="modal-no-attachments">No attachments</span>';
                }
                break;
            case 'expiration':
                value = data.messageDetails?.expiration || data.expiration || 'Unknown';
                break;
            default:
                value = 'Not available';
        }

        field.innerHTML = value;
    });

    // Show actions for message view
    const actions = messageDetailView.querySelector('.ptn-message-detail-actions');
    if (actions) actions.style.display = 'flex';
}

function announceChange(message) {
    const announcements = document.getElementById('table-announcements');
    if (announcements) {
        announcements.textContent = message;
    }
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric'
    });
}

function getSortLabel(sortBy) {
    const labels = {
        'from-asc': 'From A to Z',
        'from-desc': 'From Z to A',
        'date-asc': 'Date Sent Oldest first',
        'date-desc': 'Date Sent Newest first',
        'subject-asc': 'Subject A to Z',
        'subject-desc': 'Subject Z to A',
        'attachments': 'Has Attachments'
    };
    return labels[sortBy] || sortBy;
}

function sortData(sortBy) {
    switch (sortBy) {
        case 'from-asc':
            currentData.sort((a, b) => a.from.localeCompare(b.from));
            break;
        case 'from-desc':
            currentData.sort((a, b) => b.from.localeCompare(a.from));
            break;
        case 'date-asc':
            currentData.sort((a, b) => new Date(a.dateSent) - new Date(b.dateSent));
            break;
        case 'date-desc':
            currentData.sort((a, b) => new Date(b.dateSent) - new Date(a.dateSent));
            break;
        case 'subject-asc':
            currentData.sort((a, b) => a.subject.localeCompare(b.subject));
            break;
        case 'subject-desc':
            currentData.sort((a, b) => b.subject.localeCompare(a.subject));
            break;
        case 'attachments':
            currentData.sort((a, b) => {
                const aHasAttachments = a.attachments !== "None";
                const bHasAttachments = b.attachments !== "None";
                return bHasAttachments - aHasAttachments;
            });
            break;
    }
    currentPage = 1;
    renderTable();
    renderPagination();
    setupCheckboxHandlers();

    const totalRecords = currentData.length;
    announceChange(`Table sorted by ${getSortLabel(sortBy)}. Showing page 1 of ${Math.ceil(totalRecords / recordsPerPage)}.`);
}

function renderTable() {
    // Identify the currently active tab panel
    const activePanel = document.querySelector('.ptn-vtabpanel.ptn-active');
    if (!activePanel) return;

    // Locate the table body within the active panel
    const tbody = activePanel.querySelector('.ptn-table tbody');
    if (!tbody) return;

    // Calculate the range of data to display on the current page
    const startIndex = (currentPage - 1) * recordsPerPage;
    const endIndex = startIndex + recordsPerPage;
    const pageData = currentData.slice(startIndex, endIndex);

    // Clear the table body before rendering new rows
    tbody.innerHTML = '';

    // Populate the table with rows based on the current page data
    pageData.forEach((row, index) => {
        const tr = document.createElement('tr');
        const globalIndex = startIndex + index; // Calculate the global index for the row
        const uniqueId = `${Date.now()}-${index}`; // Generate a unique ID for checkboxes

        tr.innerHTML = `
                    <td data-cell="Select" class="checkbox-cell">
                        <label class="custom-checkbox">
                            <input type="checkbox" name="row-select" value="${globalIndex}" id="row-${uniqueId}" aria-label="Select message from ${row.from}">
                            <svg width="16" height="16" viewBox="-4 -4 39 39" aria-hidden="true" focusable="false">
                                <rect class="checkbox__background" width="35" height="35" x="-2" y="-2"
                                    stroke="currentColor" fill="none" stroke-width="3" rx="6" ry="6"></rect>
                                <polyline class="checkbox__checkmark" points="4,14 12,23 28,5" stroke="transparent"
                                    stroke-width="4" fill="none"></polyline>
                            </svg>
                        </label>
                    </td>
                    <td data-cell="From">
                        <button class="ptn-link-button" onclick="openModal('contactModal', currentData[${globalIndex}], 'contact')" 
                                aria-label="View contact details for ${row.from}">${row.from}</button>
                    </td>
                    <td data-cell="Date Sent">${formatDate(row.dateSent)}</td>
                    <td data-cell="Subject">
                        <button class="ptn-link-button" onclick="showMessageDetail(currentData[${globalIndex}], 'message')"
                                aria-label="View message details for: ${row.subject}">${row.subject}</button>
                    </td>
                    <td data-cell="Attachments">
                        ${row.attachmentDetails.length > 0 ?
                `<button class="ptn-link-button" onclick="openModal('attachmentsModal', currentData[${globalIndex}], 'attachments')"
                               aria-label="View ${row.attachmentDetails.length} attachment(s)">${row.attachments}</button>` :
                `<span class="ptn-text-muted">${row.attachments}</span>`
            }
                    </td>
                `;
        tbody.appendChild(tr);
    });

    // Update the information text for the current page
    const totalRecords = currentData.length;
    const showingStart = startIndex + 1;
    const showingEnd = Math.min(endIndex, totalRecords);

    const infoText = `Showing ${showingStart}-${showingEnd} of ${totalRecords} messages`;

    // Update the results and pagination information in the active panel
    const resultsInfo = activePanel.querySelector('#results-info');
    const paginationInfo = activePanel.querySelector('#pagination-info');

    if (resultsInfo) resultsInfo.textContent = infoText;
    if (paginationInfo) paginationInfo.textContent = infoText;
}

function renderPagination() {
    const pagination = document.getElementById('pagination');
    if (!pagination) return;

    const totalPages = Math.ceil(currentData.length / recordsPerPage);
    pagination.innerHTML = '';

    if (totalPages <= 1) return;

    // Previous button
    const prevBtn = document.createElement('button');
    prevBtn.textContent = '‹ Previous';
    prevBtn.disabled = currentPage === 1;
    prevBtn.setAttribute('aria-label', 'Go to previous page');
    if (currentPage === 1) {
        prevBtn.setAttribute('aria-disabled', 'true');
    }
    prevBtn.onclick = () => goToPage(currentPage - 1);
    pagination.appendChild(prevBtn);

    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
        const pageBtn = document.createElement('button');
        pageBtn.textContent = i;
        pageBtn.className = i === currentPage ? 'active' : '';

        if (i === currentPage) {
            pageBtn.setAttribute('aria-label', `Current page, page ${i}`);
            pageBtn.setAttribute('aria-current', 'page');
        } else {
            pageBtn.setAttribute('aria-label', `Go to page ${i}`);
        }

        pageBtn.onclick = () => goToPage(i);
        pagination.appendChild(pageBtn);
    }

    // Next button
    const nextBtn = document.createElement('button');
    nextBtn.textContent = 'Next ›';
    nextBtn.disabled = currentPage === totalPages;
    nextBtn.setAttribute('aria-label', 'Go to next page');
    if (currentPage === totalPages) {
        nextBtn.setAttribute('aria-disabled', 'true');
    }
    nextBtn.onclick = () => goToPage(currentPage + 1);
    pagination.appendChild(nextBtn);
}

function goToPage(page) {
    const totalPages = Math.ceil(currentData.length / recordsPerPage);
    if (page >= 1 && page <= totalPages) {
        currentPage = page;
        renderTable();
        renderPagination();
        setupCheckboxHandlers();

        announceChange(`Navigated to page ${currentPage} of ${totalPages}.`);

        setTimeout(() => {
            const tableElement = document.querySelector('.ptn-table');
            if (tableElement) {
                tableElement.focus();
            }
        }, 100);
    }
}

function setupCheckboxHandlers() {
    // Debugging to confirm function execution
    console.log('setupCheckboxHandlers function is being called');

    // Define all the panel configurations
    const panelConfigs = [
        {
            selectAllId: 'select-all-inbox',
            selectAllMobileId: 'select-all-mobile-inbox',
            actionBtnId: 'archive-selected-btn-inbox'
        },
        {
            selectAllId: 'select-all-sent',
            selectAllMobileId: 'select-all-mobile-sent',
            actionBtnId: 'archive-selected-btn-sent'
        },
        {
            selectAllId: 'select-all-drafts',
            selectAllMobileId: 'select-all-mobile-drafts',
            actionBtnId: 'delete-selected-btn-drafts'
        },
        {
            selectAllId: 'select-all-inbox-archive',
            selectAllMobileId: 'select-all-mobile-inbox-archive',
            actionBtnId: 'restore-selected-btn-inbox-archive'
        },
        {
            selectAllId: 'select-all-sent-archive',
            selectAllMobileId: 'select-all-mobile-sent-archive',
            actionBtnId: 'restore-selected-btn-sent-archive'
        }
    ];

    // Set up handlers for each panel
    panelConfigs.forEach(config => {
        const selectAll = document.getElementById(config.selectAllId);
        const selectAllMobile = document.getElementById(config.selectAllMobileId);
        const actionBtn = document.getElementById(config.actionBtnId);

        if (!selectAll || !selectAllMobile) {
            console.log('Missing selectAll or selectAllMobile for', config);
            return;
        }

        // Get row checkboxes for this specific panel (find the closest table)
        const table = selectAll.closest('table');
        if (!table) {
            console.log('No table found for selectAll', config.selectAllId);
            return;
        }
        const rowCheckboxes = table.querySelectorAll('input[name="row-select"]');
        console.log('Found rowCheckboxes for', config.selectAllId, rowCheckboxes);

        // Function to update action button state
        function updateActionButtonState() {
            const anyChecked = [...rowCheckboxes].some(cb => cb.checked);
            console.log('updateActionButtonState:', config.actionBtnId, 'anyChecked:', anyChecked);
            if (actionBtn) {
                actionBtn.disabled = !anyChecked;
                actionBtn.setAttribute('aria-disabled', anyChecked ? 'false' : 'true');
            }
        }

        // Remove existing listeners by cloning elements
        const newSelectAll = selectAll.cloneNode(true);
        const newSelectAllMobile = selectAllMobile.cloneNode(true);
        selectAll.parentNode.replaceChild(newSelectAll, selectAll);
        selectAllMobile.parentNode.replaceChild(newSelectAllMobile, selectAllMobile);

        const selectAllCheckboxes = [newSelectAll, newSelectAllMobile];

        // Debugging for select-all event listeners
        console.log('Setting up checkbox handlers for panel:', config);

        selectAllCheckboxes.forEach(selectAllBox => {
            selectAllBox.addEventListener('change', function () {
                console.log('Select-all checkbox changed:', config.selectAllId, 'checked:', this.checked);
                const isChecked = this.checked;
                rowCheckboxes.forEach(checkbox => checkbox.checked = isChecked);
                selectAllCheckboxes.forEach(cb => cb.checked = isChecked);
                updateActionButtonState();
            });
        });

        // Debugging for row checkbox event listeners
        rowCheckboxes.forEach(checkbox => {
            checkbox.addEventListener('change', function () {
                console.log('Row checkbox changed:', config.selectAllId, 'checked:', this.checked);
                const allChecked = [...rowCheckboxes].every(cb => cb.checked);
                selectAllCheckboxes.forEach(cb => cb.checked = allChecked);
                updateActionButtonState();
            });
        });

        // Initialize action button state
        updateActionButtonState();
    });

    // Sent tab: enable/disable Archive and Recall buttons together
    function updateSentTabActionButtons() {
        const table = document.querySelector('#ptn-panel-3 .ptn-table');
        const archiveBtn = document.getElementById('archive-selected-btn-sent');
        const recallBtn = document.getElementById('recall-selected-btn-sent');
        if (!table || !archiveBtn || !recallBtn) return;
        const checkboxes = table.querySelectorAll('tbody input[type="checkbox"]');
        const anyChecked = Array.from(checkboxes).some(cb => cb.checked);
        archiveBtn.disabled = !anyChecked;
        recallBtn.disabled = !anyChecked;
    }
    // Event delegation for Sent tab row checkboxes
    const sentTable = document.querySelector('#ptn-panel-3 .ptn-table');
    if (sentTable) {
        sentTable.addEventListener('change', function (e) {
            if (e.target && e.target.type === 'checkbox') {
                updateSentTabActionButtons();
            }
        });
    }
    // Also update on select-all checkbox
    const selectAllSent = document.getElementById('select-all-sent');
    if (selectAllSent) {
        selectAllSent.addEventListener('change', updateSentTabActionButtons);
    }
}

class PTNVerticalTabs {
    constructor(container) {
        this.container = container;
        this.tablist = container.querySelector('.ptn-vtablist');
        this.tabs = Array.from(container.querySelectorAll('.ptn-vtab'));
        this.panels = Array.from(container.querySelectorAll('.ptn-vtabpanel'));

        // Track which tab is selected (content showing) vs focused (has keyboard focus)
        this.selectedIndex = 1;
        this.focusedIndex = 1;

        // Track current orientation for responsive behavior
        this.currentOrientation = this.getOrientation();

        this.init();
        this.setupResponsiveListener();
    }

    init() {
        // Set up event listeners
        this.tabs.forEach((tab, index) => {
            // Click both focuses and selects
            tab.addEventListener('click', () => {
                this.setFocus(index);
                this.setSelection(index);
            });

            // Keyboard navigation
            tab.addEventListener('keydown', (e) => this.handleKeyDown(e));
        });

        // Initialize: Inbox tab (index 1) is selected by default
        this.setSelection(1);
        this.setFocus(1);
    }

    getOrientation() {
        // Determine if we're in mobile (horizontal) or desktop (vertical) mode
        return window.innerWidth <= 768 ? 'horizontal' : 'vertical';
    }

    setupResponsiveListener() {
        // Listen for window resize to update ARIA orientation
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                const newOrientation = this.getOrientation();
                if (newOrientation !== this.currentOrientation) {
                    this.currentOrientation = newOrientation;
                    this.tablist.setAttribute('aria-orientation', newOrientation);
                }
            }, 100);
        });

        // Set initial orientation
        this.tablist.setAttribute('aria-orientation', this.currentOrientation);
    }

    setSelection(index) {
        // If switching away from Inbox tab (index 1) and it's in message detail mode, reset to table view
        if (this.selectedIndex === 1 && index !== 1) {
            const inboxPanel = this.panels[1]; // Inbox panel
            if (inboxPanel && inboxPanel.classList.contains('ptn-showing-message-detail')) {
                // Call showTableView to reset the Inbox back to table view
                showTableView('ptn-panel-2'); // ptn-panel-2 is the Inbox panel ID
            }
        }

        // Change which tab is selected (which content is visible)
        this.selectedIndex = index;

        // Update ARIA attributes for tabs
        this.tabs.forEach((tab, i) => {
            tab.setAttribute('aria-selected', i === index ? 'true' : 'false');
        });

        // Update which panel is visible
        this.panels.forEach((panel, i) => {
            if (i === index) {
                panel.classList.add('ptn-active');
            } else {
                panel.classList.remove('ptn-active');
            }
        });

        // Update table data based on selected tab
        this.updateTableData(index);
    }

    updateTableData(tabIndex) {
        // Map tab indices to data arrays
        let dataToUse;
        let tabName;

        switch (tabIndex) {
            case 0: // New Message
                return; // No table data for New Message tab
            case 1: // Inbox  
                dataToUse = allData;
                tabName = "Inbox";
                break;
            case 2: // Sent
                dataToUse = sentData;
                tabName = "Sent";
                break;
            case 3: // Drafts
                dataToUse = draftsData;
                tabName = "Drafts";
                break;
            case 4: // Inbox Archive
                dataToUse = inboxArchiveData;
                tabName = "Inbox Archive";
                break;
            case 5: // Sent Archive
                dataToUse = sentArchiveData;
                tabName = "Sent Archive";
                break;
            default:
                dataToUse = allData;
                tabName = "Inbox";
        }

        // Update the global currentData variable
        currentData = [...dataToUse];
        currentPage = 1; // Reset to first page when switching tabs

        // Update table headers based on message type
        this.updateTableHeaders(tabIndex);

        // Update the table display
        if (typeof renderTable === 'function') {
            renderTable();
            renderPagination();
            setupCheckboxHandlers();
        }

        // Update announcements for screen readers
        if (typeof announceChange === 'function') {
            announceChange(`${tabName} loaded with ${dataToUse.length} messages, ${recordsPerPage} per page.`);
        }
    }

    updateTableHeaders(tabIndex) {
        // Find the table header for the From/To column
        const activePanel = this.panels.find(panel => panel.classList.contains('ptn-active'));
        if (!activePanel) return;

        const table = activePanel.querySelector('.ptn-table');
        if (!table) return;

        const fromHeader = table.querySelector('th:nth-child(2)'); // Second column (after checkbox)
        if (!fromHeader) return;

        // Update header text based on message type
        switch (tabIndex) {
            case 0: // New Message
            case 1: // Inbox
            case 4: // Inbox Archive
                fromHeader.textContent = "From";
                break;
            case 2: // Sent  
            case 3: // Drafts
            case 5: // Sent Archive
                fromHeader.textContent = "To";
                break;
            default:
                fromHeader.textContent = "From";
        }
    }

    setFocus(index) {
        // Change which tab has keyboard focus (doesn't change content)
        this.focusedIndex = index;

        // Update tabindex for roving focus
        this.tabs.forEach((tab, i) => {
            tab.setAttribute('tabindex', i === index ? '0' : '-1');
        });

        // Actually focus the tab
        this.tabs[index].focus();

        // Scroll into view if needed
        this.scrollTabIntoView(this.tabs[index]);
    }

    scrollTabIntoView(tab) {
        const tablist = this.tablist;

        if (this.currentOrientation === 'vertical') {
            // Vertical scrolling for desktop
            const tabTop = tab.offsetTop;
            const tabBottom = tabTop + tab.offsetHeight;
            const listTop = tablist.scrollTop;
            const listBottom = listTop + tablist.clientHeight;

            if (tabTop < listTop) {
                tablist.scrollTop = tabTop - 10;
            } else if (tabBottom > listBottom) {
                tablist.scrollTop = tabBottom - tablist.clientHeight + 10;
            }
        } else {
            // Horizontal scrolling for mobile
            const tabLeft = tab.offsetLeft;
            const tabRight = tabLeft + tab.offsetWidth;
            const listLeft = tablist.scrollLeft;
            const listRight = listLeft + tablist.clientWidth;

            if (tabLeft < listLeft) {
                tablist.scrollLeft = tabLeft - 10;
            } else if (tabRight > listRight) {
                tablist.scrollLeft = tabRight - tablist.clientWidth + 10;
            }
        }
    }

    handleKeyDown(event) {
        let targetIndex = this.focusedIndex;
        const isVertical = this.currentOrientation === 'vertical';

        switch (event.key) {
            case 'ArrowUp':
                if (isVertical) {
                    event.preventDefault();
                    targetIndex = this.focusedIndex > 0 ? this.focusedIndex - 1 : this.tabs.length - 1;
                    this.setFocus(targetIndex);
                }
                break;

            case 'ArrowDown':
                if (isVertical) {
                    event.preventDefault();
                    targetIndex = this.focusedIndex < this.tabs.length - 1 ? this.focusedIndex + 1 : 0;
                    this.setFocus(targetIndex);
                }
                break;

            case 'ArrowLeft':
                if (!isVertical) {
                    event.preventDefault();
                    targetIndex = this.focusedIndex > 0 ? this.focusedIndex - 1 : this.tabs.length - 1;
                    this.setFocus(targetIndex);
                }
                break;

            case 'ArrowRight':
                if (!isVertical) {
                    event.preventDefault();
                    targetIndex = this.focusedIndex < this.tabs.length - 1 ? this.focusedIndex + 1 : 0;
                    this.setFocus(targetIndex);
                }
                break;

            case 'Home':
                event.preventDefault();
                this.setFocus(0);
                break;

            case 'End':
                event.preventDefault();
                this.setFocus(this.tabs.length - 1);
                break;

            case 'Enter':
            case ' ':
                event.preventDefault();
                // Select the currently focused tab
                this.setSelection(this.focusedIndex);
                break;
        }
    }
}

// Helper function for multiple instances
function initAllPTNVerticalTabs() {
    const allTabsContainers = document.querySelectorAll('.ptn-vtabs-container');
    allTabsContainers.forEach(container => {
        new PTNVerticalTabs(container);
    });
}

// Helper function for multiple instances
function initAllPTNVerticalTabs() {
    const allTabsContainers = document.querySelectorAll('.ptn-vtabs-container');
    allTabsContainers.forEach(container => {
        new PTNVerticalTabs(container);
    });
}

// ===== FILE UPLOAD DEMO FUNCTIONALITY =====
// Simple demo functionality - just shows the "Choose Files" button working
(function () {
    const fileInput = document.getElementById('message-attachments');
    const fileButton = document.querySelector('.ptn-file-upload-button');

    if (fileInput && fileButton) {
        // Demo function for file button click
        fileButton.addEventListener('click', function () {
            // In a real app, this would open the file picker
            // For demo purposes, just show a confirmation
            alert('File picker would open here. The file list below shows demo files.');
        });

        // Optional: Add demo remove functionality for the static files
        const removeButtons = document.querySelectorAll('.ptn-file-item-remove');
        removeButtons.forEach(button => {
            button.addEventListener('click', function () {
                const fileName = this.getAttribute('aria-label').replace('Remove ', '').replace(' from attachments', '');
                if (confirm(`Remove ${fileName}?`)) {
                    this.closest('.ptn-file-item').remove();

                    // If no files left, hide the file list
                    const remainingFiles = document.querySelectorAll('.ptn-file-item');
                    if (remainingFiles.length === 0) {
                        document.getElementById('attachment-file-list').style.display = 'none';
                    }
                }
            });
        });
    }
})();

// Multi-select recipient picker with WCAG styling
(function () {
    const users = [
        { id: '1', label: 'Jane Smith', detail: 'UIUC Project Management', email: 'jsmith@uiuc.edu', initials: 'JS' },
        { id: '2', label: 'John Doe', detail: 'UIC Finance Department', email: 'jdoe@uic.edu', initials: 'JD' },
        { id: '3', label: 'Katie Conway', detail: 'AITS Administration', email: 'kfconway@uillinois.edu', initials: 'KC' },
        { id: '4', label: 'Nora Martinez', detail: 'AITS Technical Support', email: 'nmartinez@uillinois.edu', initials: 'NM' },
        { id: '5', label: 'Jordan Lee', detail: 'UIS Springfield Campus', email: 'jlee3@uis.edu', initials: 'JL' },
        { id: '6', label: 'Sarah Anderson', detail: 'Strategic Planning', email: 'sanderson@uillinois.edu', initials: 'SA' },
        { id: '7', label: 'Marcus Williams', detail: 'IT Operations', email: 'mwilliams@uillinois.edu', initials: 'MW' }
    ];

    const wrapper = document.getElementById('recipient-picker-wrapper');
    const input = document.getElementById('recipient-picker');
    const listbox = document.getElementById('recipient-listbox');
    const pillsDiv = document.getElementById('recipient-pills');

    // Make selected array globally accessible for notification preferences
    // Pre-select Jane Smith and Nora Martinez by default
    window.selected = [
        users.find(user => user.id === '1'), // Jane Smith
        users.find(user => user.id === '4')  // Nora Martinez
    ];
    let filtered = users;
    let activeIndex = -1;

    // Make renderPills function globally accessible
    window.renderPills = function () {
        pillsDiv.innerHTML = '';
        window.selected.forEach(user => {
            const pill = document.createElement('span');
            pill.className = 'ptn-recipient-pill';

            // Create text content
            const text = document.createTextNode(user.label);

            pill.appendChild(text);

            const removeBtn = document.createElement('button');
            removeBtn.className = 'ptn-recipient-pill-remove';
            removeBtn.type = 'button';
            removeBtn.setAttribute('aria-label', `Remove ${user.label} from recipients`);
            removeBtn.setAttribute('tabindex', '0');
            removeBtn.innerHTML = '×';

            // Handle both click and keyboard events
            const removeUser = () => {
                window.selected = window.selected.filter(u => u.id !== user.id);
                window.renderPills();
                renderListbox(false);
                updateNotificationPreferences(); // Update preferences visibility
                announceRemoval(user);
                // Return focus to input after removal
                input.focus();
            };

            removeBtn.addEventListener('click', removeUser);
            removeBtn.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    removeUser();
                }
            });

            pill.appendChild(removeBtn);
            pillsDiv.appendChild(pill);
        });

        // Update placeholder: show when no recipients selected, hide when recipients are selected
        input.placeholder = window.selected.length > 0 ? '' : 'Search and add recipients...';
        resizeInput();
    }

    function renderListbox(showAll) {
        const query = input.value.trim().toLowerCase();
        filtered = users.filter(user => {
            const matchesQuery = showAll ||
                user.label.toLowerCase().includes(query) ||
                user.detail.toLowerCase().includes(query) ||
                user.email.toLowerCase().includes(query);
            const notAlreadySelected = !window.selected.some(s => s.id === user.id);
            return matchesQuery && notAlreadySelected;
        });

        listbox.innerHTML = '';

        if (filtered.length === 0) {
            listbox.style.display = 'none';
            wrapper.setAttribute('aria-expanded', 'false');
            input.setAttribute('aria-activedescendant', '');
            return;
        }

        filtered.forEach((user, index) => {
            const li = document.createElement('li');
            li.className = 'ptn-recipient-option';
            li.setAttribute('role', 'option');
            li.setAttribute('id', `recipient-option-${user.id}`);
            li.innerHTML = `<strong>${user.label}</strong><br><small class="ptn-text-muted">${user.detail} • ${user.email}</small>`;

            if (index === activeIndex) {
                li.classList.add('active');
                input.setAttribute('aria-activedescendant', li.id);
            }

            li.addEventListener('mousedown', e => {
                e.preventDefault();
                selectUser(user);
            });

            listbox.appendChild(li);
        });

        listbox.style.display = 'block';
        wrapper.setAttribute('aria-expanded', 'true');
    }

    function selectUser(user) {
        if (!window.selected.some(u => u.id === user.id)) {
            window.selected.push(user);
            window.renderPills();
            updateNotificationPreferences(); // Update preferences visibility
            input.value = '';
            activeIndex = -1;
            renderListbox(false);
            announceSelection(user);
            input.focus(); // Return focus to input
        }
    }

    // Function to sync notification preferences visibility with selected recipients
    function updateNotificationPreferences() {
        const preferencesContainer = document.getElementById('recipient-preferences-container');
        const notificationPrefsSection = document.getElementById('notification-preferences');

        if (!preferencesContainer || !notificationPrefsSection) return;

        // Get all preference entries
        const allPreferenceEntries = preferencesContainer.querySelectorAll('li[data-recipient-id]');

        // Show/hide preference entries based on selected recipients
        allPreferenceEntries.forEach(entry => {
            const recipientId = entry.getAttribute('data-recipient-id');
            const isSelected = window.selected.some(user => user.id === recipientId);

            if (isSelected) {
                entry.style.display = 'block';
            } else {
                entry.style.display = 'none';
            }
        });

        // Show/hide the entire notification preferences section based on whether any recipients are selected
        if (window.selected.length > 0) {
            notificationPrefsSection.classList.add('show');
            notificationPrefsSection.classList.remove('hide');
        } else {
            notificationPrefsSection.classList.add('hide');
            notificationPrefsSection.classList.remove('show');
        }

        // Force update of recipient list item styling since CSS pseudo-selectors 
        // don't always update immediately with dynamic DOM changes
        updateRecipientListStyling();
    }

    // Function to manually update recipient list styling for dynamic changes
    function updateRecipientListStyling() {
        const preferencesContainer = document.getElementById('recipient-preferences-container');
        if (!preferencesContainer) return;

        const visibleItems = Array.from(preferencesContainer.querySelectorAll('li[data-recipient-id]'))
            .filter(item => item.style.display !== 'none');

        // Reset all classes first
        visibleItems.forEach(item => {
            item.classList.remove('ptn-first-child', 'ptn-last-child', 'ptn-only-child');
        });

        // Apply styling based on position
        if (visibleItems.length === 1) {
            visibleItems[0].classList.add('ptn-only-child');
        } else if (visibleItems.length > 1) {
            visibleItems[0].classList.add('ptn-first-child');
            visibleItems[visibleItems.length - 1].classList.add('ptn-last-child');
        }
    }

    function openDropdown() {
        renderListbox(true);
        if (filtered.length > 0) {
            activeIndex = 0;
            renderListbox(false);
        }
    }

    function closeDropdown() {
        listbox.style.display = 'none';
        wrapper.setAttribute('aria-expanded', 'false');
        input.setAttribute('aria-activedescendant', '');
        activeIndex = -1;
    }

    function announceOption() {
        if (activeIndex >= 0 && filtered[activeIndex]) {
            const user = filtered[activeIndex];
            // Screen readers will announce this via aria-activedescendant
            // But we can also use a live region for additional context
            setTimeout(() => {
                const announcement = `${user.label}, ${user.detail}`;
                announceToScreenReader(announcement);
            }, 100);
        }
    }

    function announceSelection(user) {
        const announcement = `${user.label} added to recipients`;
        announceToScreenReader(announcement);
    }

    function announceRemoval(user) {
        const announcement = `${user.label} removed from recipients`;
        announceToScreenReader(announcement);
    }

    function announceToScreenReader(message) {
        // Create a temporary live region for announcements
        let liveRegion = document.getElementById('recipient-announcements');
        if (!liveRegion) {
            liveRegion = document.createElement('div');
            liveRegion.id = 'recipient-announcements';
            liveRegion.setAttribute('aria-live', 'polite');
            liveRegion.setAttribute('aria-atomic', 'true');
            liveRegion.className = 'sr-only';
            document.body.appendChild(liveRegion);
        }
        liveRegion.textContent = message;

        // Clear the message after a short delay
        setTimeout(() => {
            liveRegion.textContent = '';
        }, 1000);
    }

    function resizeInput() {
        let newWidth;

        if (input.value) {
            // When user is typing: size based on content
            newWidth = Math.max(8, Math.min(35, input.value.length + 3));
        } else if (input.placeholder && input.placeholder.length > 0) {
            // When empty but placeholder has content: size based on placeholder
            newWidth = Math.max(4, Math.min(50, input.placeholder.length + 2));
        } else {
            // When empty and no placeholder (recipients selected): minimal size
            newWidth = 4;
        }

        // Force the width with !important-like specificity
        input.style.setProperty('width', `${newWidth}ch`, 'important');

        // Debug logging to see what's happening
        console.log(`Value: "${input.value}", Placeholder: "${input.placeholder}", Length: ${input.placeholder ? input.placeholder.length : 0}, Width set to: ${newWidth}ch`);
    }

    // Event listeners
    input.addEventListener('input', () => {
        activeIndex = -1;
        renderListbox(input.value.length > 0); // Show dropdown when typing
        resizeInput();

        // Announce search results to screen readers
        setTimeout(() => {
            if (input.value.trim()) {
                const resultCount = filtered.length;
                const announcement = `${resultCount} recipient${resultCount !== 1 ? 's' : ''} found`;
                announceToScreenReader(announcement);
            }
        }, 300);
    });

    input.addEventListener('focus', () => {
        // Only show dropdown if user starts typing or presses arrow down
        // Don't auto-show on focus to avoid overwhelming screen reader users
    });

    input.addEventListener('keydown', e => {
        if (listbox.style.display === 'block' && filtered.length > 0) {
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                activeIndex = (activeIndex + 1) % filtered.length;
                renderListbox(false);
                announceOption();
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                activeIndex = activeIndex <= 0 ? filtered.length - 1 : activeIndex - 1;
                renderListbox(false);
                announceOption();
            } else if (e.key === 'Enter' && activeIndex >= 0) {
                e.preventDefault();
                selectUser(filtered[activeIndex]);
            } else if (e.key === 'Escape') {
                e.preventDefault();
                closeDropdown();
            } else if (e.key === 'Tab') {
                // Allow tab to close dropdown and move to next element
                closeDropdown();
            }
        } else {
            // When dropdown is closed
            if (e.key === 'ArrowDown' || e.key === 'Enter') {
                e.preventDefault();
                openDropdown();
            } else if (e.key === 'Escape') {
                e.preventDefault();
                closeDropdown();
            } else if ((e.key === 'Backspace' || e.key === 'Delete') && input.value === '' && window.selected.length > 0) {
                // Remove last selected with backspace when input is empty
                e.preventDefault();
                const removedUser = window.selected.pop();
                window.renderPills();
                renderListbox(false);
                updateNotificationPreferences(); // Update preferences visibility
                announceRemoval(removedUser);
            }
        }
    });

    // Click outside to close
    document.addEventListener('click', e => {
        if (!wrapper.contains(e.target)) {
            listbox.style.display = 'none';
            wrapper.setAttribute('aria-expanded', 'false');
            input.setAttribute('aria-activedescendant', '');
        }
    });

    // Initialize
    window.renderPills();
    updateNotificationPreferences(); // Set initial visibility of preferences

    // Set initial width based on placeholder
    setTimeout(() => {
        resizeInput();
    }, 100);


})();

// Simple notification preferences - just static for demo purposes
// In a real implementation, this would be dynamically generated based on selected recipients

// Horizontal Tabs Component
class PTNTabs {
    constructor(container) {
        this.container = container;
        this.tablist = container.querySelector('.ptn-tablist');
        this.tabs = Array.from(container.querySelectorAll('.ptn-tab'));
        // Only select direct child tab panels, not nested ones
        this.panels = Array.from(container.children).filter(child =>
            child.classList.contains('ptn-tabpanel'));

        // Track which tab is selected (content showing) vs focused (has keyboard focus)
        this.selectedIndex = 0;
        this.focusedIndex = 0;



        this.init();
    }

    init() {
        // Set up event listeners
        this.tabs.forEach((tab, index) => {
            // Click both focuses and selects
            tab.addEventListener('click', () => {
                this.setFocus(index);
                this.setSelection(index);
            });

            // Keyboard navigation
            tab.addEventListener('keydown', (e) => this.handleKeyDown(e));
        });

        // Initialize: first tab is both focused and selected
        this.setSelection(0);
        this.setFocus(0);
    }

    setSelection(index) {
        // Change which tab is selected (which content is visible)
        this.selectedIndex = index;



        // Update ARIA attributes for tabs
        this.tabs.forEach((tab, i) => {
            tab.setAttribute('aria-selected', i === index ? 'true' : 'false');
        });

        // Update which panel is visible
        this.panels.forEach((panel, i) => {
            if (i === index) {
                panel.classList.add('ptn-active');
            } else {
                panel.classList.remove('ptn-active');
            }
        });
    }

    setFocus(index) {
        // Change which tab has keyboard focus (doesn't change content)
        this.focusedIndex = index;

        // Update tabindex for roving focus
        this.tabs.forEach((tab, i) => {
            tab.setAttribute('tabindex', i === index ? '0' : '-1');
        });

        // Actually focus the tab
        this.tabs[index].focus();

        // Scroll into view if needed
        this.scrollTabIntoView(this.tabs[index]);
    }

    scrollTabIntoView(tab) {
        const tablist = this.tablist;
        const tabLeft = tab.offsetLeft;
        const tabRight = tabLeft + tab.offsetWidth;
        const listLeft = tablist.scrollLeft;
        const listRight = listLeft + tablist.clientWidth;

        if (tabLeft < listLeft) {
            tablist.scrollLeft = tabLeft - 10;
        } else if (tabRight > listRight) {
            tablist.scrollLeft = tabRight - tablist.clientWidth + 10;
        }
    }

    handleKeyDown(event) {
        let targetIndex = this.focusedIndex;

        switch (event.key) {
            case 'ArrowLeft':
                event.preventDefault();
                targetIndex = this.focusedIndex > 0 ? this.focusedIndex - 1 : this.tabs.length - 1;
                this.setFocus(targetIndex);
                break;

            case 'ArrowRight':
                event.preventDefault();
                targetIndex = this.focusedIndex < this.tabs.length - 1 ? this.focusedIndex + 1 : 0;
                this.setFocus(targetIndex);
                break;

            case 'Home':
                event.preventDefault();
                this.setFocus(0);
                break;

            case 'End':
                event.preventDefault();
                this.setFocus(this.tabs.length - 1);
                break;

            case 'Enter':
            case ' ':
                event.preventDefault();
                // Select the currently focused tab
                this.setSelection(this.focusedIndex);
                break;
        }
    }
}

// Functions for preferences form
function getLastSavedValues() {
    // This would normally load saved values from server/localStorage
    alert('Loading last saved values... (Demo function)');
}

function getDefaultValues() {
    // This would normally reset to default values
    alert('Loading default values... (Demo function)');
}

// Initialize horizontal tabs when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Initialize horizontal tabs
    const horizontalTabsContainer = document.querySelector('.ptn-tabs-container');
    if (horizontalTabsContainer) {
        new PTNTabs(horizontalTabsContainer);
    }

    // Initialize vertical tabs
    const tabsContainer = document.querySelector('.ptn-vtabs-container');
    if (tabsContainer) {
        new PTNVerticalTabs(tabsContainer);
    }

    // Initialize table functionality
    const sortSelect = document.getElementById('sort-select');
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            sortData(e.target.value);
        });
    }

    // Initialize records per page functionality
    const recordsPerPageSelect = document.getElementById('records-per-page-select');
    if (recordsPerPageSelect) {
        recordsPerPageSelect.addEventListener('change', (e) => {
            recordsPerPage = parseInt(e.target.value);
            currentPage = 1; // Reset to first page
            renderTable();
            renderPagination();
            setupCheckboxHandlers();

            const totalRecords = currentData.length;
            const totalPages = Math.ceil(totalRecords / recordsPerPage);
            announceChange(`Changed to ${recordsPerPage} messages per page. Showing page 1 of ${totalPages}.`);
        });
    }

    const table = document.querySelector('.ptn-table');
    if (table) {
        table.setAttribute('tabindex', '-1');
    }

    renderTable();
    renderPagination();
    setupCheckboxHandlers();

    announceChange(`Inbox loaded with ${allData.length} messages, ${recordsPerPage} per page.`);

    // Add event delegation for modal and message detail action buttons
    document.addEventListener('click', (e) => {
        // Handle modal action buttons
        if (e.target.closest('.ptn-modal-btnbar .ptn-button')) {
            const button = e.target.closest('.ptn-button');
            const actionText = button.textContent.trim().toLowerCase();

            console.log('Button clicked, action detected:', `"${actionText}"`);

            // More robust action detection
            let action = actionText;
            if (actionText.includes('forward')) {
                action = 'forward';
            } else if (actionText.includes('notification')) {
                action = 'notification';
            } else if (actionText.includes('archive')) {
                action = 'archive';
            } else if (actionText.includes('recall')) {
                action = 'recall';
            }

            // Demo functionality - replace with actual implementations
            switch (action) {
                case 'forward':
                    openModal('forwardModal');
                    break;
                case 'notification':
                    openModal('notificationModal');
                    break;
                case 'archive':
                    // Get message data from the button's context
                    const messageData = { action: 'archive', source: 'modal' };
                    showArchiveConfirmation(messageData);
                    break;
                case 'recall':
                    openModal('recallConfirmModal');
                    break;
                default:
                    alert(`Unknown action: ${action}`);
            }
        }

        // Handle in-tab message detail action buttons
        if (e.target.closest('.ptn-message-detail-actions .ptn-button')) {
            const button = e.target.closest('.ptn-button');
            const actionText = button.textContent.trim().toLowerCase();

            console.log('In-tab button clicked, action detected:', `"${actionText}"`);

            // More robust action detection
            let action = actionText;
            if (actionText.includes('forward')) {
                action = 'forward';
            } else if (actionText.includes('notification')) {
                action = 'notification';
            } else if (actionText.includes('archive')) {
                action = 'archive';
            } else if (actionText.includes('recall')) {
                action = 'recall';
            } else if (actionText.includes('edit draft')) {
                action = 'edit draft';
            } else if (actionText.includes('permanently delete')) {
                action = 'permanently delete';
            }

            // Demo functionality - replace with actual implementations
            switch (action) {
                case 'forward':
                    openModal('forwardModal');
                    break;
                case 'notification':
                    openModal('notificationModal');
                    break;
                case 'archive':
                    // Get message data from the button's context
                    const messageData = { action: 'archive', source: 'in-tab' };
                    showArchiveConfirmation(messageData);
                    break;
                case 'recall':
                    openModal('recallConfirmModal');
                    break;
                case 'edit draft':
                    alert('Edit Draft action clicked - This would open the draft in compose mode.');
                    break;
                case 'send message':
                    alert('Send Message action clicked - This would send the draft message.');
                    break;
                case 'delete draft':
                    alert('Delete Draft action clicked - This would delete the draft message.');
                    break;
                case 'restore to inbox':
                    alert('Restore to Inbox action clicked - This would move the message from archive back to inbox.');
                    break;
                case 'restore to sent':
                    alert('Restore to Sent action clicked - This would move the message from archive back to sent folder.');
                    break;
                case 'permanently delete':
                    alert('Permanently Delete action clicked - This would permanently delete the archived message.');
                    break;
                default:
                    alert(`Unknown action: ${action}`);
            }
        }

        // Sent Archive message detail actions
        if (e.target.closest('#ptn-panel-6 .ptn-message-detail-actions .ptn-button')) {
            const button = e.target.closest('.ptn-button');
            const actionText = button.textContent.trim().toLowerCase();
            let action = actionText;
            if (actionText.includes('restore')) {
                action = 'restore to sent';
            } else if (actionText.includes('forward')) {
                action = 'forward';
            } else if (actionText.includes('permanently delete')) {
                action = 'permanently delete';
            }
            switch (action) {
                case 'restore to sent':
                    alert('Restore to Sent action clicked - This would move the message from archive back to sent folder.');
                    break;
                case 'forward':
                    alert('Forward action clicked - This would forward the sent message.');
                    break;
                case 'permanently delete':
                    alert('Permanently Delete action clicked - This would permanently delete the archived sent message.');
                    break;
                default:
                    alert(`Unknown action: ${action}`);
            }
        }
    });
});

// ===== PREFERENCES FORM FUNCTIONALITY =====
// Initialize preferences form when the component loads
function initPreferencesForm() {
    const form = document.getElementById('preferences-form');
    const saveButton = document.getElementById('save-preferences');
    const resetButton = document.getElementById('reset-preferences');
    const emailInput = document.getElementById('email-address');
    const emailConfirmInput = document.getElementById('email-confirm');
    const retentionCustomRadio = document.getElementById('retention-custom');
    const retentionDaysInput = document.getElementById('retention-days');

    if (!form) return;

    // Email confirmation validation
    function validateEmailMatch() {
        const email = emailInput.value.trim();
        const emailConfirm = emailConfirmInput.value.trim();

        if (emailConfirm && email !== emailConfirm) {
            emailConfirmInput.setCustomValidity('Email addresses do not match');
        } else {
            emailConfirmInput.setCustomValidity('');
        }
    }

    // Handle retention days input enable/disable
    function handleRetentionDaysInput() {
        const isCustomSelected = retentionCustomRadio.checked;
        retentionDaysInput.disabled = !isCustomSelected;
        retentionDaysInput.setAttribute('aria-disabled', !isCustomSelected);

        if (isCustomSelected) {
            retentionDaysInput.focus();
        }
    }

    // Event listeners
    emailInput?.addEventListener('input', validateEmailMatch);
    emailConfirmInput?.addEventListener('input', validateEmailMatch);

    // Handle retention radio buttons
    const retentionRadios = document.querySelectorAll('input[name="retention"]');
    retentionRadios.forEach(radio => {
        radio.addEventListener('change', handleRetentionDaysInput);
    });

    // Form submission
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Validate email match
        validateEmailMatch();

        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        // Collect form data
        const formData = new FormData(form);
        const preferences = {};

        for (let [key, value] of formData.entries()) {
            preferences[key] = value;
        }

        // Add retention days only if custom retention is selected
        if (preferences.retention === 'custom') {
            preferences['retention-days'] = retentionDaysInput.value;
        }

        // Simulate saving preferences
        saveButton.disabled = true;
        saveButton.innerHTML = `
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm3.78-9.72a.75.75 0 0 0-1.06-1.06L6.75 9.19 5.28 7.72a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0l4.5-4.5z"/>
                    </svg>
                    Saving...
                `;

        setTimeout(() => {
            saveButton.disabled = false;
            saveButton.innerHTML = `
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                            <path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"/>
                        </svg>
                        Save Preferences
                    `;

            // Show success message
            showPreferencesMessage('Preferences saved successfully!', 'success');
            console.log('Preferences saved:', preferences);
        }, 1500);
    });

    // Reset to defaults
    resetButton?.addEventListener('click', function () {
        if (confirm('Are you sure you want to reset all preferences to their default values?')) {
            // Reset form to default values
            form.reset();

            // Set specific defaults
            document.getElementById('animations-off').checked = true;
            document.getElementById('retention-default').checked = true;
            document.getElementById('new-msg-yes').checked = true;
            document.getElementById('maintenance-yes').checked = true;
            document.getElementById('security-yes').checked = true;
            document.getElementById('date-mdy').checked = true;
            document.getElementById('time-12h').checked = true;
            document.getElementById('locale-select').value = 'en-US';
            document.getElementById('timezone-select').value = 'America/Chicago';

            // Clear email fields
            emailInput.value = '';
            emailConfirmInput.value = '';

            // Handle retention days input
            handleRetentionDaysInput();

            showPreferencesMessage('Preferences reset to default values.', 'info');
        }
    });

    // Initialize state
    handleRetentionDaysInput();
}

// Show preference messages
function showPreferencesMessage(message, type = 'info') {
    // Remove existing message
    const existingMessage = document.querySelector('.ptn-preferences-message');
    if (existingMessage) {
        existingMessage.remove();
    }

    // Create new message
    const messageDiv = document.createElement('div');
    messageDiv.className = `ptn-preferences-message ptn-preferences-message--${type}`;
    messageDiv.setAttribute('role', 'status');
    messageDiv.setAttribute('aria-live', 'polite');
    messageDiv.innerHTML = `
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                    ${type === 'success'
            ? '<path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"/>'
            : '<path fill-rule="evenodd" d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.75-11.25a.75.75 0 0 0-1.5 0v4.5a.75.75 0 0 0 1.5 0v-4.5zm0 7a.75.75 0 0 0-1.5 0v.75a.75.75 0 0 0 1.5 0v-.75z" clip-rule="evenodd"/>'
        }
                </svg>
                ${message}
            `;

    // Insert at top of form
    const form = document.getElementById('preferences-form');
    if (form) {
        form.insertBefore(messageDiv, form.firstChild);

        // Auto-remove after 5 seconds
        setTimeout(() => {
            if (messageDiv.parentNode) {
                messageDiv.remove();
            }
        }, 5000);
    }
}

// Synchronize desktop and mobile "Viewing As" dropdowns
function syncViewingAsDropdowns() {
    const desktopSelect = document.getElementById('sort-select');
    const mobileSelect = document.getElementById('mobile-sort-select');

    if (desktopSelect && mobileSelect) {
        // Sync desktop to mobile
        desktopSelect.addEventListener('change', function () {
            mobileSelect.value = this.value;
        });

        // Sync mobile to desktop
        mobileSelect.addEventListener('change', function () {
            desktopSelect.value = this.value;
        });
    }
}

// Initialize preferences form when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    initPreferencesForm();
    syncViewingAsDropdowns();
    initTooltips();
});

// ===== TOOLTIP FUNCTIONALITY =====
// SVG Icon Library
const TooltipIcons = {
    solid: {
        info: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10"/>
            <circle cx="12" cy="8" r="1.5" fill="white"/>
            <rect x="11" y="10.5" width="2" height="6.5" rx="1" fill="white"/>
        </svg>`,

        question: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10"/>
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3m.08 4h.01" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`,

        warning: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 20h20L12 2z"/>
            <path d="M12 9v4m0 4h.01" stroke="white" stroke-width="2" stroke-linecap="round"/>
        </svg>`,

        error: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10"/>
            <line x1="12" y1="8" x2="12" y2="13" stroke="white" stroke-width="2" stroke-linecap="round"/>
            <circle cx="12" cy="16" r="1" fill="white"/>
        </svg>`,

        success: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10"/>
            <path d="M9 12l2 2 4-4" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`
    },
    outlined: {
        info: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="2"/>
            <circle cx="12" cy="8" r="1.5" fill="currentColor"/>
            <rect x="11" y="10.5" width="2" height="6.5" rx="1" fill="currentColor"/>
        </svg>`,

        question: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="2"/>
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
            <circle cx="12" cy="17" r="1" fill="currentColor"/>
        </svg>`,

        warning: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 20h20L12 2z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
            <line x1="12" y1="9" x2="12" y2="13" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            <circle cx="12" cy="17" r="1" fill="currentColor"/>
        </svg>`,

        error: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="2"/>
            <line x1="12" y1="8" x2="12" y2="13" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            <circle cx="12" cy="16" r="1" fill="currentColor"/>
        </svg>`,

        success: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="2"/>
            <path d="M9 12l2 2 4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`
    }
};

class AccessibleTooltip {
    constructor(container) {
        this.container = container;
        this.trigger = container.querySelector('.ptn-tooltip-trigger');
        this.content = container.querySelector('.ptn-tooltip-content');
        this.isVisible = false;
        this.originalPosition = this.container.getAttribute('data-position') || 'top';

        // Set up unique ID for accessibility
        this.tooltipId = 'tooltip-' + Math.random().toString(36).substr(2, 9);
        this.content.id = this.tooltipId;
        this.trigger.setAttribute('aria-describedby', this.tooltipId);

        // Get tooltip text from data attribute
        this.tooltipText = this.trigger.getAttribute('data-tooltip');
        this.content.textContent = this.tooltipText;

        // Inject SVG icon based on data-icon and data-style attributes
        this.injectIcon();

        this.init();
    }

    injectIcon() {
        const iconName = this.trigger.getAttribute('data-icon') || 'info';
        const iconStyle = this.trigger.getAttribute('data-style') || 'solid';

        const iconSVG = TooltipIcons[iconStyle]?.[iconName];

        if (iconSVG) {
            this.trigger.innerHTML = iconSVG;
        } else {
            console.warn(`Icon "${iconName}" with style "${iconStyle}" not found. Using default "info" icon.`);
            this.trigger.innerHTML = TooltipIcons.solid.info;
        }
    }

    adjustPosition() {
        // Always start with the original position
        this.container.setAttribute('data-position', this.originalPosition);

        requestAnimationFrame(() => {
            const updatedRect = this.content.getBoundingClientRect();
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;
            const padding = 10;

            let newPosition = this.originalPosition;

            // Horizontal overflow logic
            if (newPosition === 'right' && updatedRect.right > viewportWidth - padding) {
                newPosition = 'left';
            } else if (newPosition === 'left' && updatedRect.left < padding) {
                newPosition = 'right';
            }

            // Vertical overflow logic (only for left/right)
            if ((newPosition === 'right' || newPosition === 'left')) {
                if (updatedRect.top < padding) {
                    newPosition = 'bottom';
                } else if (updatedRect.bottom > viewportHeight - padding) {
                    newPosition = 'top';
                }
            }

            this.container.setAttribute('data-position', newPosition);
        });
    }

    init() {
        // Mouse events
        this.trigger.addEventListener('mouseenter', () => this.show());
        this.trigger.addEventListener('mouseleave', () => this.hide());

        // Focus events
        this.trigger.addEventListener('focus', () => this.show());
        this.trigger.addEventListener('blur', () => this.hide());

        // Keyboard events
        this.trigger.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isVisible) {
                this.hide();
                e.preventDefault();
            }
        });

        // Touch events for mobile
        this.trigger.addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.toggle();
        }, { passive: false });
    }

    show() {
        this.content.classList.add('show');
        this.content.setAttribute('aria-hidden', 'false');
        this.isVisible = true;

        // Check and adjust position after showing
        requestAnimationFrame(() => this.adjustPosition());
    }

    hide() {
        this.content.classList.remove('show');
        this.content.setAttribute('aria-hidden', 'true');
        this.isVisible = false;

        // Reset to original position when hiding
        this.container.setAttribute('data-position', this.originalPosition);
    }

    toggle() {
        if (this.isVisible) {
            this.hide();
        } else {
            this.show();
        }
    }
}

// Initialize all tooltips on the page
function initTooltips() {
    const tooltipContainers = document.querySelectorAll('.ptn-tooltip-container');
    tooltipContainers.forEach(container => {
        new AccessibleTooltip(container);
    });

    // Hide all tooltips when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.ptn-tooltip-container')) {
            document.querySelectorAll('.ptn-tooltip-content.show').forEach(tooltip => {
                tooltip.classList.remove('show');
                tooltip.setAttribute('aria-hidden', 'true');
            });
        }
    });
}

// Forward Modal Functions (simple demo implementations)
function sendForwardMessage() {
    alert('Forward message sent successfully!');
    closeModal('forwardModal');
}

function saveForwardAsDraft() {
    alert('Forward message saved as draft!');
    closeModal('forwardModal');
}

function deleteForwardDraft() {
    if (confirm('Are you sure you want to delete this draft? This action cannot be undone.')) {
        alert('Draft deleted!');
        closeModal('forwardModal');
    }
}

// Function to confirm recall action
function confirmRecallMessage() {
    // Simple recall confirmation
    console.log('Recalling message');

    // Close the recall modal
    closeModal('recallConfirmModal');

    // Show success message
    alert('Message has been recalled successfully.');
}

// Function to create notification email
function createNotificationEmail() {
    const subject = document.getElementById('notification-email-subject').value;
    const body = document.getElementById('notification-email-body').value;

    if (!subject.trim() || !body.trim()) {
        alert('Please fill in both email subject and body.');
        return;
    }

    // Log the notification creation (demo purposes)
    console.log('Creating notification email:', { subject, body });

    // Close the notification modal
    closeModal('notificationModal');

    // Show success message
    alert('Notification email has been created successfully.');
}

// Patch: Dynamic JS positioning for tooltips with data-position="right"
// This code should be added to the AccessibleTooltip class or the tooltip logic
// after the tooltip is shown, to override CSS positioning if needed.

// Find all tooltip containers with data-position="right"
document.querySelectorAll('.ptn-tooltip-container[data-position="right"]').forEach(container => {
    const trigger = container.querySelector('.ptn-tooltip-trigger');
    const tooltip = container.querySelector('.ptn-tooltip-content');
    if (!trigger || !tooltip) return;

    // Show tooltip to measure
    tooltip.style.visibility = 'hidden';
    tooltip.style.display = 'block';

    // Get bounding rects
    const triggerRect = trigger.getBoundingClientRect();
    const tooltipRect = tooltip.getBoundingClientRect();

    // Calculate desired position (right of trigger)
    let top = triggerRect.top + window.scrollY + (triggerRect.height - tooltipRect.height) / 2;
    let left = triggerRect.right + window.scrollX + 8; // 8px gap

    // Check for overflow (right edge)
    const viewportWidth = window.innerWidth;
    if (left + tooltipRect.width > viewportWidth) {
        // If overflow, position left of trigger
        left = triggerRect.left + window.scrollX - tooltipRect.width - 8;
    }
    // Check for overflow (top/bottom)
    if (top < 0) top = 8;
    if (top + tooltipRect.height > window.innerHeight) {
        top = window.innerHeight - tooltipRect.height - 8;
    }

    // Apply position
    tooltip.style.position = 'absolute';
    tooltip.style.left = left + 'px';
    tooltip.style.top = top + 'px';
    tooltip.style.visibility = 'visible';
    tooltip.style.display = '';
});

