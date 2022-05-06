const mongoose = require("mongoose");

const HostelPermissionSchema = new mongoose.Schema({
  Student: mongoose.Schema.Types.ObjectId,
  Permission_Type: String,
  Reason: String,
  Date_Out: Date,
  ExpectedReturn: Date,
  ActualReturn: Date,
  Permission_Status: String,
  Warden: mongoose.Schema.Types.ObjectId,
  Time_Created_Or_Edited: {
    type: Date,
    default: Date.now,
  },
  Permission_Status: {
    type: Map,
    of: String,
    default: {
      Status: "Waiting for review",
      Remarks: "No remarks yet",
    },
  },
});

const EventPermissionSchema = new mongoose.Schema({
  Society: mongoose.Schema.Types.ObjectId,
  Event_Name: String,
  Description: String,
  Start_Date: Date,
  End_Date: Date,
  Time_Created_Or_Edited: {
    type: Date,
    default: Date.now,
  },
  Flex_Location_Alloted: {
    type: [mongoose.Schema.Types.ObjectId],
    default: null,
  },
  Room_Alloted: {
    type: [mongoose.Schema.Types.ObjectId],
    default: null,
  },
  Flex_Permission_Status: {
    type: Map,
    of: String,
    default: {
      Status: "Waiting for review",
      Remarks: "No remarks yet",
    },
  },
  Event_Permission_Status: {
    type: Map,
    of: String,
    default: {
      Status: "Waiting for review",
      Remarks: "No remarks yet",
    },
  },
  Room_Permission_Status: {
    type: Map,
    of: String,
    default: {
      Status: "Waiting for review",
      Remarks: "No remarks yet",
    },
  },
});

const OtherPermissionSchema = new mongoose.Schema({
  Title: String,
  Description: String,
  Time_Created_Or_Edited: {
    type: Date,
    default: Date.now,
  },
  Admin_Incharge: {
    type: [mongoose.Schema.Types.ObjectId],
    default: null,
  },
  Permission_Status: String,
  Date_Start: Date,
  Date_End: Date,
  Permission_Status: {
    type: Map,
    of: String,
    default: {
      Status: "Waiting for review",
      Remarks: "No remarks yet",
    },
  },
});

const HostelPermissions = mongoose.model(
  "Hostel Permissions",
  HostelPermissionSchema
);
const EventPermissions = mongoose.model(
  "Event Permissions",
  EventPermissionSchema
);
const OtherPermissions = mongoose.model(
  "Other Permission",
  OtherPermissionSchema
);

module.exports = { HostelPermissions, EventPermissions, OtherPermissions };
