'use strict';

// Wit.ai parameters
const WIT_TOKEN = "A225KN23UE7AFINHCKQQT2ZG4IBLFHXF";
if (!WIT_TOKEN) {
  throw new Error('missing WIT_TOKEN');
}

// Messenger API parameters
const FB_PAGE_TOKEN = "EAAZAGHt6MJlkBAHkTTJicdZB1W4fEHGJWrxk0djwPNyjwD37gJg3fv9E7jdkRIGyFV4XMwbqv60QFQjJhTwGx3qJ3JJMHV3ZA6QlIsaofs9jXbsJiDkoAha6WT9ZCW4pROZCsogIdr78noIxrvqqoZC1xCBvQePtaiyLKMjFxJzbYcsvD37xKp";

var FB_VERIFY_TOKEN = "EAAZAGHt6MJlkBAHkTTJicdZB1W4fEHGJWrxk0djwPNyjwD37gJg3fv9E7jdkRIGyFV4XMwbqv60QFQjJhTwGx3qJ3JJMHV3ZA6QlIsaofs9jXbsJiDkoAha6WT9ZCW4pROZCsogIdr78noIxrvqqoZC1xCBvQePtaiyLKMjFxJzbYcsvD37xKp";
if (!FB_VERIFY_TOKEN) {
  FB_VERIFY_TOKEN = "just_do_it";
}

module.exports = {
  WIT_TOKEN: WIT_TOKEN,
  FB_PAGE_TOKEN: FB_PAGE_TOKEN,
  FB_VERIFY_TOKEN: FB_VERIFY_TOKEN,
};