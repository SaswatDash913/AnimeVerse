import express from 'express'
import cors from 'cors'
const app = express();

app.use(cors({
  origin: 'https://animeverse-frontend-r2ar.onrender.com',
  credentials: true
}));

app.get('/api/display',(req,res)=>{
    const display = [
        {
            id: 1,
            title: 'One Piece',
            category: 'Action',
            description: 'A Japanese manga series and anime television show about a young adventurer named Monkey D. Luffy who sets out to find the legendary treasure, "One Piece", to become the King of the Pirates.',
            image: 'https://m.media-amazon.com/images/M/MV5BMTNjNGU4NTUtYmVjMy00YjRiLTkxMWUtNzZkMDNiYjZhNmViXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
            video:"https://www.youtube.com/embed/MCb13lbVGE0?si=rnp8TQh0-MnbRYDE"
        },
        {
            id: 2,
            title: 'jujutsu kaisen',
            category: 'Action',
            description: 'The story follows high school student Yuji Itadori as he joins a secret organization of Jujutsu Sorcerers in order to kill a powerful Curse named Ryomen Sukuna, to whom Yuji becomes the host.',
            image: 'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781974741229/jujutsu-kaisen-vol-21-9781974741229_hr.jpg',
            video:"https://www.youtube.com/embed/Pm-wNmS9RGI?si=gFC8mfc72e2ECDz5"
        },
        {
            id: 3,
            titl: 'Attack On Titan',
            category: 'Action',
            description: 'Set in a post-apocalyptic world where the remains of humanity live behind walls protecting them from giant humanoid Titans,',
            image: 'https://www.justwatch.com/images/poster/130288291/s718/season-1.jpg',
            video:"https://www.youtube.com/embed/LV-nazLVmgo?si=xxSKcUZfNJR9MW84" 
        },
        {
            id: 4,
            title: 'Vinland saga',
            category: 'Action',
            description: 'a young Viking named Thorfinn who seeks revenge for his father s murder',
            image: 'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p17127060_b_v8_aa.jpg',
            video:"https://www.youtube.com/embed/pahdCwHJjaU?si=nCG9cYAUl5mceQ-1"
            
        },
        {
            id:5,
            title: 'Naruto',
            category: 'Action',
            description: 'Naruto is a Japanese manga series and anime about a young ninja named Naruto Uzumaki who wants to become the leader of his village, the Hokage.',
            image: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/94/NarutoCoverTankobon1.jpg/220px-NarutoCoverTankobon1.jpg',
            video:"https://www.youtube.com/embed/-G9BqkgZXRA?si=jvFGsZ3VygOmmNMD"
        }
    ];
    res.send(display);
})

app.get('/api/propage',(req,res)=>{
    const propage = [
        {
            id: 1,
            title: 'One Piece',
            category: 'Action',
            description: 'Naruto Uzumaki is the main protagonist of Naruto, a young ninja with dreams of becoming Hokage, the leader of his village. Born as the host of the Nine-Tails Fox, he faces loneliness and rejection. Through determination and hard work, he grows stronger, mastering powerful techniques like the Rasengan and Shadow Clone Jutsu. Naruto matures into a wise and capable leader. Ultimately, he achieves his dream of becoming Hokage and brings peace to the ninja world.',
            image: 'https://i.ytimg.com/vi/NP7maNr5_3k/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA7Ibq-ac6rKGy8jiVhISJu1HdaZA',
            video:"https://www.youtube.com/embed/ULdapEcU2SU?si=e1hfqReBQ1ipVtKo"
        },
        {
            id: 2,
            title: 'jujutsu kaisen',
            category: 'Action',
            description: 'The story follows high school student Yuji Itadori as he joins a secret organization of Jujutsu Sorcerers in order to kill a powerful Curse named Ryomen Sukuna, to whom Yuji becomes the host.',
            image: 'https://i.ytimg.com/vi/WeWMfRunu1w/maxresdefault.jpg',
            video:"https://www.youtube.com/embed/d78fGOMCGcA?si=v4Utc-uF0rErnbK7"
        },
        {
            id: 3,
            title: 'Attack On Titan',
            category: 'Action',
            description: 'Set in a post-apocalyptic world where the remains of humanity live behind walls protecting them from giant humanoid Titans,',
            image: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/06/Collage-Maker-22-Jun-2022-1014-AM.jpg',
            video:"https://www.youtube.com/embed/F0sqfPkCcyM?si=JOyNn1WgS7EHIXwD"
        },
        {
            id: 4,
            title: 'Vinland saga',
            category: 'Action',
            description: 'a young Viking named Thorfinn who seeks revenge for his father s murder',
            image: 'https://www.animeexplained.com/wp-content/uploads/2023/01/Vinland-Saga-featured.jpg',
            video:"https://www.youtube.com/embed/Kg2D1SrUw48?si=tNruSZUWnV1fnU4r"
            
        },
        {
            id:5,
            title: 'Naruto',
            category: 'Action',
            description: 'Naruto is a Japanese manga series and anime about a young ninja named Naruto Uzumaki who wants to become the leader of his village, the Hokage.',
            image: 'https://static.toiimg.com/thumb/msid-115450269,width-1280,height-720,resizemode-4/115450269.jpg',
            video:"https://www.youtube.com/embed/LMyk4Ny8Dvk?si=_F8LdCpbNEO7wZb6"
        }
    ];
    res.send(propage);
})

app.get("/api/action",(req,res)=>{
    const action = [
        {
            id: 1,
            title: 'One Piece',
            category: 'Action',
            description: 'Naruto Uzumaki is the main protagonist of Naruto, a young ninja with dreams of becoming Hokage, the leader of his village. Born as the host of the Nine-Tails Fox, he faces loneliness and rejection. Through determination and hard work, he grows stronger, mastering powerful techniques like the Rasengan and Shadow Clone Jutsu. Naruto matures into a wise and capable leader. Ultimately, he achieves his dream of becoming Hokage and brings peace to the ninja world.',
            image: 'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p12129031_b_v8_ab.jpg',
            video:"https://www.youtube.com/embed/ULdapEcU2SU?si=e1hfqReBQ1ipVtKo"
        },
        {
            id: 2,
            title: 'jujutsu kaisen',
            category: 'Action',
            description: 'The story follows high school student Yuji Itadori as he joins a secret organization of Jujutsu Sorcerers in order to kill a powerful Curse named Ryomen Sukuna, to whom Yuji becomes the host.',
            image: 'https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/e4e80c83c792d81c138e320874dbdffc.jpe',
            video:"https://www.youtube.com/embed/d78fGOMCGcA?si=v4Utc-uF0rErnbK7"
        },
        {
            id: 3,
            title: 'Attack On Titan',
            category: 'Action',
            description: 'Set in a post-apocalyptic world where the remains of humanity live behind walls protecting them from giant humanoid Titans,',
            image: 'https://thecomicbookstore.in/wp-content/uploads/2022/11/TCBS3146.png',
            video:"https://www.youtube.com/embed/F0sqfPkCcyM?si=JOyNn1WgS7EHIXwD"
        },
        {
            id: 4,
            title: 'Vinland saga',
            category: 'Action',
            description: 'a young Viking named Thorfinn who seeks revenge for his father s murder',
            image: 'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p17127060_b_v8_aa.jpg',
            video:"https://www.youtube.com/embed/Kg2D1SrUw48?si=tNruSZUWnV1fnU4r"
            
        },
        {
            id:5,
            title: 'Naruto',
            category: 'Action',
            description: 'Naruto is a Japanese manga series and anime about a young ninja named Naruto Uzumaki who wants to become the leader of his village, the Hokage.',
            image: 'https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/8532171bec0d05bfe45769a330fbab82.jpg',
            video:"https://www.youtube.com/embed/LMyk4Ny8Dvk?si=_F8LdCpbNEO7wZb6"
        },
        {
            id:6,
            title:"Demon Slayer:Kimetsu no Yaiba",
            category:"Action",
            description:"Demon Slayer: Kimetsu no Yaiba is a Japanese manga series and anime television series about a young boy who becomes a demon slayer to avenge his family and cure his sister",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtHEfiiO_3GR-zPRwhYrqdwQEhtLtYwkOa-g&s",
            video:"https://www.youtube.com/embed/zqYlJQ0JxLA?si=vquWBxdcD_7OkPtt"
        },
        {
            id:7,
            title:"Chainsaw man",
            category:"Action",
            description:"Chainsaw Man follows the story of Denji, an impoverished teenager who makes a contract that fuses his body with that of a dog-like Devil named Pochita, granting him the ability to transform parts of his body into chainsaws.",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtSP3D08bVbv9sj515cn7E_JCOjsThSj6XAg&s",
            video:"https://www.youtube.com/embed/Gjw-I7HWU10?si=YssDpCjODEN19Zwq"

        },
        {
            id:8,
            title:"My Hero Academia",
            category:"Action",
            description:"Set in a world where superpowers (called Quirks) have become commonplace, the story follows Izuku Midoriya, a boy who was born without a Quirk but still dreams of becoming a superhero himself.",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfwP7usRIxfQNj841lU1eALx_vFTlD8ZN-fA&s",
            video:"https://www.youtube.com/embed/0tvC2iauh0U?si=x16ZVXkfDpNrVbzo"

        },
        {
            id:9,
            title:"Bleach",
            category:"Action",
            description:"Bleach (stylized in all caps) is a Japanese manga series written and illustrated by Tite Kubo. It follows the adventures of a teenager Ichigo Kurosaki, who obtains the powers of a Soul Reaper—a death personification similar to a Grim Reaper—from another Soul Reaper, Rukia Kuchiki.",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu6c6qmqLmWuIl3nOYt7bCscTUP6Gtwta7mA&s",
            video:"https://www.youtube.com/embed/iAKSz3wHomc?si=L-H7iEAqbvVJLP8C"

        },
        {
            id:10,
            title:"Black Clover",
            category:"Action",
            description:"Set in a world where people are born with the ability to use magic, the story follows Asta, a young boy without any magic power who is given a rare grimoire that grants him anti-magic abilities. With his fellow mages from the Black Bulls, Asta plans to become the next Wizard King.",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZQdKnRR9fjRpUmr7c3TzhRir4yOPe9UTXgQ&s",
            video:"https://www.youtube.com/embed/hFoAgH0v510?si=gDc01xfl0kkD4Aq0"

        },
        {
            id:11,
            title:"Dr.stone",
            category:"Action",
            description:"Plot. In 2019, a mysterious flash suddenly petrifies ostensibly all humans. The human race is frozen in stone for 3,700 years until in April 5738, when 16-year-old prodigy Senku Ishigami is suddenly revived to find himself in a world where all traces of human civilization have been eroded by time.",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXkh699Npx6E2QisMz745uBvY5F8o2Czf4gQ&s",
            video:"https://www.youtube.com/embed/xHohN6ocnFQ?si=_0AQoxUNqAsiwOSG"

        },
        {
            id:12,
            title:"The Seven Deadly Sins: Four Knights of the Apocalypse",
            category:"Action",
            description:"The Seven Deadly Sins are a band of knights in the land of Britannia (ブリタニア, Buritania) who had disbanded ten years earlier after being framed for plotting a coup against the Liones Kingdom (リオネス王国, Rionesu Ōkoku), the Holy Knights who sequestered them before taking control in the wake of a rebellion they organized.",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiUkQdP2Sh_TLEu6m66E-r8GtPMzbC10BUWw&s",
            video:"https://www.youtube.com/embed/gH4PpZCXsl8?si=ED5ybYFSOErLm9xu"
        },
        {
            id:13,
            title:"Berserk",
            category:"Action",
            description:"Berserk (Japanese: ベルセルク, Hepburn: Beruseruku) is a Japanese manga series written and illustrated by Kentaro Miura. Set in a medieval Europe-inspired dark fantasy world, the story centers on the characters of Guts, a lone swordsman, and Griffith, the leader of a mercenary band called the Band of the Hawk.",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLWqm6sZlr2bgrxTPhRXK1vOWYJVKRBIFleg&s",
            video:"https://www.youtube.com/embed/x-d3-TCQ-TQ?si=CNN1KeWE4iBH5Ec3"

        },
        {
            id:14,
            title:"Hell's paradise",
            category:"Action",
            description:"For a chance at a pardon, a ninja assassin joins other condemned criminals on a journey to a mysterious island to retrieve an elixir of immortality. Animation studio MAPPA (Jujutsu Kaisen) produces this series based on the manga by Yuji Kaku.",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF7cwb4n3TGNaNBmyu4Nm8lO87jVoTEhQu2g&s",
            video:"https://www.youtube.com/embed/VD2CpPSWSWY?si=CVZpJTKbYeOc8hEd"
        },
        {
            id:15,
            title:"Tokyo Revengers",
            category:"Action",
            description:"Hanagaki Takemichi lives an unsatisfying life right up until his death. Waking up 12 years in the past, he reckons with the eventual fate of his friends and tries to prevent an unfortunate future. Takemichi Hanagaki is a freelancer that's reached the absolute pits of despair in his life.",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKEpB5m3Bo0c67zjdyTPZtRIFzPdwcHV2sbw&s",
            video:""
        }
    ];

    res.send(action)
})

const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log(`serve at http:localhost:${port}`);
});
    