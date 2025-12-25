import 'dotenv/config';
import notificationapi from 'notificationapi-node-server-sdk';

notificationapi.init(
  process.env.NOTIFICATIONAPI_CLIENT_ID,
  process.env.NOTIFICATIONAPI_CLIENT_SECRET
);

async function test() {
  // 1. Identify user
  await notificationapi.identifyUser({
    id: 'zita_test',
    email: 'zitaclement@gmail.com',
    number: '+919168759744'
  });

  console.log('identifyUser done');

  // 2. Send test notification
  await notificationapi.send({
    type: 'brn_enquiries',
    to: {
      id: 'zita_test'
    },
    parameters: {
      name: 'Test',
      email: 'test@test.com',
      phone: '+919168759744',
      interest: 'Test',
      message: 'Direct test from script'
    }
  });

  console.log('send done');
}

test().catch(console.error);
