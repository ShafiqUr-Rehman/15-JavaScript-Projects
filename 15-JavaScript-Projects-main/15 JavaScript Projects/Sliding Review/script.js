// local reviews data
const reviews = [
    {
        id: 1,
        name: 'susan smith',
        job: 'web developer',
        img: 'https://www.course-api.com/images/people/person-1.jpeg',
        info: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        id: 2,
        name: 'anna johnson',
        job: 'web designer',
        img: 'https://www.course-api.com/images/people/person-2.jpeg',
        info: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
        id: 3,
        name: 'peter jones',
        job: 'intern',
        img: 'https://www.course-api.com/images/people/person-4.jpeg',
        info: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
        id: 4,
        name: 'bill anderson',
        job: 'the boss',
        img: 'https://www.course-api.com/images/people/person-3.jpeg',
        info: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
    {
        id: 5,
        name: 'mary doe',
        job: 'graphic designer',
        img: 'https://www.example.com/images/people/person-5.jpeg',
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non magna et justo convallis gravida.',
    },

    {
        id: 5,
        name: 'mary doe',
        job: 'graphic designer',
        img: 'https://images.unsplash.com/photo-1466112928291-0903b80a9466?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D',
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non magna et justo convallis gravida.',
    },
    {
        id: 6,
        name: 'steve wilson',
        job: 'software engineer',
        img: 'https://www.example.com/images/people/person-6.jpeg',
        info: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer in bibendum justo.',
    },
    {
        id: 7,
        name: 'emily brown',
        job: 'marketing specialist',
        img: 'https://images.unsplash.com/photo-1497316730643-415fac54a2af?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D',
        info: 'Ut fermentum, odio ut efficitur eleifend, ligula justo pharetra odio, in bibendum urna risus in ipsum.',
    },
    {
        id: 8,
        name: 'david white',
        job: 'UX/UI designer',
        img: 'https://images.unsplash.com/photo-1474447976065-67d23accb1e3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D',
        info: 'Vivamus vel ante vitae velit aliquet rhoncus. In hac habitasse platea dictumst. Suspendisse potenti. Duis ullamcorper placerat.',
    },
    {
        id: 9,
        name: 'olivia green',
        job: 'content writer',
        img: 'https://plus.unsplash.com/premium_photo-1675034393381-7e246fc40755?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D',
        info: 'Nullam vitae est eu lectus vulputate sollicitudin. Maecenas id luctus ex. Sed nec efficitur justo. Maecenas non turpis vitae arcu tincidunt imperdiet vel et ex.',
    },
    {
        id: 10,
        name: 'michael jones',
        job: 'data analyst',
        img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D',
        info: 'Curabitur tincidunt, libero et fermentum volutpat, orci risus vestibulum leo, id fringilla nulla nisl at sapien. Proin quis turpis nec mi malesuada consectetur.',
    },
    {
        id: 11,
        name: 'jessica wilson',
        job: 'business analyst',
        img: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D',
        info: 'Fusce tincidunt ultricies sem, vel congue justo bibendum sit amet. Nam vestibulum metus nec velit varius, ac vestibulum mi tincidunt.',
    },
    {
        id: 12,
        name: 'ryan smith',
        job: 'network administrator',
        img: 'https://images.unsplash.com/photo-1618641986557-1ecd230959aa?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D',
        info: 'Vestibulum congue urna ac erat fringilla facilisis. Sed tincidunt felis a nisl hendrerit, a vulputate dolor consectetur.',
    },
    {
        id: 13,
        name: 'lauren brown',
        job: 'project manager',
        img: 'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D',
        info: 'Suspendisse potenti. Quisque ut metus vel purus fermentum tincidunt vel vel odio. Etiam eu ante vel lacus posuere sollicitudin.',
    },
    {
        id: 14,
        name: 'adam wilson',
        job: 'system administrator',
        img: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D',
        info: 'Phasellus consequat, urna vel tincidunt luctus, ligula neque varius quam, id egestas nulla lectus ac elit. In scelerisque libero sit amet lacus dictum tincidunt.',
    },
    {
        id: 15,
        name: 'lily smith',
        job: 'product manager',
        img: 'https://www.example.com/images/people/person-15.jpeg',
        info: 'Pellentesque at mi eu tortor cursus cursus. Ut consequat ultrices tellus, nec ultricies nisi volutpat sit amet. Fusce at venenatis urna.',
    }
];

const img = document.querySelector("#personImg")
const author = document.querySelector("#name")
const job = document.querySelector("#job")
const info = document.querySelector("#info")
const prevBtn = document.querySelector("#prev-btn")
const nextBtn = document.querySelector("#next-btn")
const randomBtn = document.querySelector(".random-btn")

let currentItem = 0;

window.addEventListener("DOMContentLoaded", () => {
    showPersonData(currentItem);
})

function showPersonData(person) {
    let item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.info
}

nextBtn.addEventListener("click", () => {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPersonData(currentItem);
})

prevBtn.addEventListener("click", () => {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPersonData(currentItem);
})

randomBtn.addEventListener("click", () => {
    let randomNumber = Math.floor(Math.random() * reviews.length)
    currentItem = randomNumber;
    showPersonData(currentItem)
})