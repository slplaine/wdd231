const my Info = { new URLSearchParams(window.location.search) };
console.log(myInfo.get('first'));
console.log(myInfo.get('last'));
console.log(myInfo.get('ordinance'));
console.log(myInfo.get('date'));
console.log(myInfo.get('location'));
console.log(myInfo.get('email'));
console.log(myInfo.get('phone'));

document.querySelector('#result').innerHTML = `
<p>Appointment for ${myInfo.get('first')} ${myInfo.get('last')}</p>
<p>Proxy Ordinance: ${myInfo.get('ordinance')}</p> on ${myInfo.get('date')} at ${myInfo.get('location')}</p>
<p>Your Phone: ${myInfo.get('phone')}</p>
<p>Your Email: ${myInfo.get('email')}</p>
`;