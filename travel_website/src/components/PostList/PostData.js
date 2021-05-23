const PostData = [
    {
        date: '05202021',
        stateName: 'WA',
        cityName: 'Spokane',
        city: 'Spokane',
        title: 'Second Week',
        imgUrl: 'https://picsum.photos/300',
        postImage: [
            'https://picsum.photos/200/300',
            'https://c2.staticflickr.com/8/7577/28973580825_d8f541ba3f_b.jpg',
            'https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_b.jpg',
        ],
        location: [47.65754562, -117.422810786],
        content: [`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nihil est enim, de quo minus dubitari possit, quam et honesta expetenda per se et eodem modo turpia per se esse fugienda. Ita, quem ad modum in senatu semper est aliquis, qui interpretem postulet, sic, isti nobis cum interprete audiendi sunt. Tanta vis admonitionis inest in locis; Duo Reges: constructio interrete. Indicant pueri, in quibus ut in speculis natura cernitur. Hinc ceteri particulas arripere conati suam quisque videro voluit afferre sententiam. Urgent tamen et nihil remittunt.`]
    },
    {
        date: '11182020',
        stateName: 'SD',
        cityName: 'Rapid City',
        city: 'Rapid City',
        title: '5 Best Week',
        imgUrl: 'https://picsum.photos/500',
        postImage: [
            'https://picsum.photos/200/300',
            'https://picsum.photos/300/400',
            'https://picsum.photos/500',
        ],
        location: [44.11652366, -103.237857],
        content: [`Quamquam non negatis nos intellegere quid sit voluptas, sed quid ille dicat. Itaque e contrario moderati aequabilesque habitus, affectiones ususque corporis apti esse ad naturam videntur. Nec enim figura corporis nec ratio excellens ingenii humani significat ad unam hanc rem natum hominem, ut frueretur voluptatibus. Claudii libidini, qui tum erat summo ne imperio, dederetur. At tu eadem ista dic in iudicio aut, si coronam times, dic in senatu. Itaque homo in primis ingenuus et gravis, dignus illa familiaritate Scipionis et Laelii, Panaetius, cum ad Q. Laboro autem non sine causa; Invidiosum nomen est, infame, suspectum.`]
    }, 
    {
        date: '04212021',
        stateName: 'VT',
        cityName: 'Vermonchi',
        title: 'Third in List',
        imgUrl: 'https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_b.jpg',
        postImage: [
            'https://picsum.photos/200/300',
            'https://picsum.photos/300/400',
            'https://picsum.photos/500',
        ],
        location: [43.80577857, -72.613760],
        content: [`Ita fit cum gravior, tum etiam splendidior oratio. Huic mori optimum esse propter desperationem sapientiae, illi propter spem vivere.`,
         `Haeret in salebra. Ita est quoddam commune officium sapientis et insipientis, ex quo efficitur versari in iis, quae media dicamus. Atque ab his initiis profecti omnium virtutum et originem et progressionem persecuti sunt.`,
          `Quis autem de ipso sapiente aliter existimat, quin, etiam cum decreverit esse moriendum, tamen discessu a suis atque ipsa relinquenda luce moveatur? Graecis hoc modicum est: Leonidas, Epaminondas, tres aliqui aut quattuor; Maximas vero virtutes iacere omnis necesse est voluptate dominante.`]
    },
    {
        date: '11182021',
        stateName: 'NY',
        title: ' 4 Crazy weather',
        imgUrl: 'https://c4.staticflickr.com/9/8562/28897228731_ff4447ef5f_b.jpg',
        postImage: [
            'https://picsum.photos/200/300',
            'https://picsum.photos/300/400',
            'https://picsum.photos/500',
        ],
        location: [40.72684385, -74.000476],
        content: [`Quamquam non negatis nos intellegere quid sit voluptas, sed quid ille dicat. Itaque e contrario moderati aequabilesque habitus, affectiones ususque corporis apti esse ad naturam videntur. Nec enim figura corporis nec ratio excellens ingenii humani significat ad unam hanc rem natum hominem, ut frueretur voluptatibus. Claudii libidini, qui tum erat summo ne imperio, dederetur. At tu eadem ista dic in iudicio aut, si coronam times, dic in senatu. Itaque homo in primis ingenuus et gravis, dignus illa familiaritate Scipionis et Laelii, Panaetius, cum ad Q. Laboro autem non sine causa; Invidiosum nomen est, infame, suspectum.`]
    }, 

    {
        date: '050920212',
        stateName: 'NC',
        title: 'I am the LAST',
        imgUrl: 'https://c6.staticflickr.com/9/8342/28897193381_800db6419e_b.jpg',
        postImage: [
            'https://picsum.photos/200/300',
            'https://c7.staticflickr.com/9/8824/28868764222_19f3b30773_b.jpg',
            'https://c7.staticflickr.com/9/8106/28941228886_86d1450016_b.jpg',
        ],
        
        location: [35.20865791399334, -80.90094073522417],
        content: [`Quamquam non negatis nos intellegere quid sit voluptas, sed quid ille dicat. Itaque e contrario moderati aequabilesque habitus, affectiones ususque corporis apti esse ad naturam videntur. Nec enim figura corporis nec ratio excellens ingenii humani significat ad unam hanc rem natum hominem, ut frueretur voluptatibus. Claudii libidini, qui tum erat summo ne imperio, dederetur. At tu eadem ista dic in iudicio aut, si coronam times, dic in senatu. Itaque homo in primis ingenuus et gravis, dignus illa familiaritate Scipionis et Laelii, Panaetius, cum ad Q. Laboro autem non sine causa; Invidiosum nomen est, infame, suspectum.`]
    },
    {   
       
        date: '04202121',
        stateName: 'CO',
        city: 'Boulder',
        title: 'The First in List Lorem ipsum dolor sit amet',
        imgUrl: 'https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_b.jpg',
        postImage: [
                'https://c4.staticflickr.com/9/8578/28357117603_97a8233cf5_b.jpg',
                'https://c6.staticflickr.com/9/8893/28897116141_641b88e342_b.jpg',
                'https://c1.staticflickr.com/9/8056/28354485944_148d6a5fc1_b.jpg',
        ],
        location: [ 40.03006879330159, -105.26504071159694],
        content: [`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nihil est enim, de quo minus dubitari possit, quam et honesta expetenda per se et eodem modo turpia per se esse fugienda. Ita, quem ad modum in senatu semper est aliquis, qui interpretem postulet, sic, isti nobis cum interprete audiendi sunt. Tanta vis admonitionis inest in locis; Duo Reges: constructio interrete. Indicant pueri, in quibus ut in speculis natura cernitur. Hinc ceteri particulas arripere conati suam quisque videro voluit afferre sententiam. Urgent tamen et nihil remittunt.`]
    },
    
    


];
export default PostData;