export interface Procedure {
    title: string;
    slug: string;
    description: string;
    conditions: string[];
    imagePath: string;
    images?: string[];
    details?: string;  // Additional content for the template page
    metatag: string;
    metades: string; 
  }
  
  export interface TreatmentCategory {
    category: string;
    slug: string;
    procedures: Procedure[];
  }
  
  export const treatments: TreatmentCategory[] = [
    {
      category: "Minimally Invasive Procedures",
      slug: "minimally-invasive-procedures",
      procedures: [
        {
          title: "Endoscopic Spine Surgery",
          slug: "endoscopic-spine-surgery",
          description: "Endoscopic Spine Surgeon in Delhi",
          conditions: ["Herniated Disc", "Spinal Stenosis", "Degenerative Disc Disease"],
          imagePath: "/images/endoscopic_surgery.jpg",
          metatag: "Best Endoscopic Spine Surgeon In Delhi | Consultant at SGRH", 
          metades: "Endoscopic spine surgery in Delhi by internationally-trained spine specialist at Sir Ganga Ram Hospital. 10+ years of experience. Book appointment now.",
          details: 
          `
Endoscopic spine surgery is a minimally invasive surgery, which means it involves small incisions and
shorter recovery time. If you’re looking for an endoscopic spine surgeon in Delhi to relieve chronic
lower back and leg pain, you’ve come to the right place.
This procedure is often considered the gold standard method of spine surgery and we make sure it
stays that way. The expertise of Dr Chetan Ram ensures minimal impact of the tissues, as compared
with older open surgery options.

Patients also prefer the least invasive technique to treat their conditions as it degenerative disc
disease, ensures less blood loss, short operation time, lower pain after operation and reduced
requirement of anaesthetic.
### Advantages of Endoscopic Spine Surgery:

* Minimal collateral damage
* Low risk of infection
* Technically advanced yet cost-effective

If you’re suffering from a herniated disc, sciatica, spinal stenosis, facet joint syndrome or any other
spinal condition, book an appointment right now to consult with a spine specialist.
          `
        },
        {
          title: "Microdiscectomy",
          slug: "microdiscectomy",
          description: "Microdiscectomy Spine Surgeon In Delhi",
          conditions: ["Herniated Disc", "Sciatica", "Radiculopathy"],
          imagePath: "/images/microdiscectomy.jpg",
          metatag: "Microdiscectomy Spine Surgeon In Delhi | Consultant at SGRH", 
          metades: "Microdiscectomy spine surgery in Delhi by internationally-trained spine specialist at Sir Ganga Ram Hospital. 10+ years of experience. Consult now.",
          details: 
          `
Microdiscectomy is needed when the soft, jelly-like center of a disc in your spine pushes against or
protrudes out of its outer ring. Our Microdiscectomy spine surgeon in Delhi will carefully listen to
your problems, understand the reason behind usual symptoms such as numbness, pain and
weakness in neck, and then decide whether the surgery is actually required.

Herniated discs usually heal on their own within a period of around one month. But when it doesn’t,
it’s advisable to see a spine specialist. Microdiscectomy requires a specially trained surgeon as it
involves removal of disc material putting pressure on the nerves.


Dr Chetan Ram has specialized in advanced spine surgeries with fellowship from Japan and various
prestigious invasive spine courses over the years, after completing the formal training to become an
orthopaedic surgeon. Call now to get relief from your pain.
          
          ` 
        },
        {
          title: "Kyphoplasty/Vertebroplasty",
          slug: "kyphoplasty-vertebroplasty",
          description: "Kyphoplasty/Vertebroplasty Spine Surgeon In Delhi",
          conditions: ["Vertebral Compression Fractures", "Osteoporotic Fractures"],
          imagePath: "/images/vertebral.png",
          metatag: "Kyphoplasty/Vertebroplasty Surgeon In Delhi | Spine Specialist",
          metades: "Kyphoplasty/Vertebroplasty spine surgery in Delhi by internationally-trained spine specialist at Sir Ganga Ram Hospital. 10+ years of experience. Call now.",
          details: 
          `

Spinal bones are known as vertebrae. Our Kyphoplasty or Vertebroplasty surgeon in Delhi uses this
approach to treat compression fractures in these spinal bones. This is also a minimally invasive
procedure that ensures small incisions and faster recovery.

These painful breaks in the vertebrae and can cause the spinal bones to collapse. This leads to a
curve in the patient’s spine leading to hunched over appearance known as Kyphosis. Kyphoplasty is
done to prevent this collapse and hunching over.

The most common causes of these compression fractures is osteoporosis, known as weakening of
bones, and spinal tumors. In Vertebroplasty, the surgeon injects a type of bone cement into the
broken bone. In Kyphoplasty, a balloon is inserted in the surgery area to make space to inject
cement and is deflated and removed right after.

As you can guess, the surgery requires accuracy, experience and expert training. If you’re looking for
that combination, book an appointment right away.
          `
        }
      ]
    },
    {
      category: "Advanced Spine Surgeries",
      slug: "advanced-spine-surgeries",
      procedures: [
        {
          title: "OLIF (Oblique Lateral Interbody Fusion)",
          slug: "oblique-lateral-interbody-fusion",
          description: "Oblique Lateral Interbody Fusion (OLIF) Surgery In Delhi",
          conditions: ["Degenerative Disc Disease", "Spondylolisthesis", "Spinal Stenosis", "Adult Spinal Deformity"],
          imagePath: "/images/olif.jpeg",
          images: ["/images/olif-1.jpeg", "/images/olif-2.jpeg", "/images/olif-3.jpeg", "/images/olif-4.jpeg"], 
          metatag: "Oblique Lateral Interbody Fusion (OLIF) Surgeon In Delhi", 
          metades: "Oblique Lateral Interbody Fusion (OLIF) surgery in Delhi by internationally-trained spine specialist at Sir Ganga Ram Hospital. 10+ yrs of experience. Call now.",
          details: 
          `
As the name suggests, our Oblique Lateral Interbody Fusion (OLIF) surgeon in Delhi utilizes this
procedure to fuse the bones of the lower back or lumbar spine area. The minimally invasive surgery
technique uses a single small cut to operate on the disc space ensuring lower risk of infection and
increasing chances of faster recovery.

It is a safe and effective treatment option for degeneration of bones in the lower back area. The
damaged disc is removed and filled with bone material, with bones getting fused at the end. After
the procedure you can expect the restoration of correct spine position, height and curvature. The
pain is also relieved as more space is made for the compressed nerves.          

#### Benefits of OLIF Surgery Vs Open Surgery:

*  Less wound infections
*  Technically advanced procedure but more effective
*  Reduces surgery procedure time
*  Less risk of nerve damage and bleeding
*  No cutting of muscle or soft tissue
*  Quicker discharge from hospital
*  Faster recovery and lower risk of blood clots

Every case of surgery is different in some ways and whatever you have researched may turn out to
be different whether in terms of the surgery option or the diagnosis. Consult with our spine
specialist for clarity on your treatment.

`
        },
        {
          title: "Spinal Fusion Surgery",
          slug: "spinal-fusion-surgery",
          description: "Spinal Fusion Surgery in Delhi",
          conditions: ["Spondylolisthesis", "Degenerative Disc Disease", "Spinal Deformities"],
          imagePath: "/images/spine_fusion.jpg",
          metatag: "Spinal Fusion Surgeon In Delhi | Specialist at Ganga Ram Hospital", 
          metades: "Spinal fusion surgery in Delhi by internationally-trained spine specialist at Sir Ganga Ram Hospital. 10+ yrs of experience. Book Appointment Now.",
          details: 
          `

Spinal fusion surgery is done to connect two or more bones in any portion of the spine. If you’re
seeking a safe, trusted and expert spinal fusion surgeon in Delhi, your search may end at Dr Chetan
Ram, who’s serving as a consultant specialist at Sir Ganga Ram Hospital in Karol Bagh.

#### Commons Reason To Opt For Spinal Fusion Surgery:

*  To correct problems with form of the spine such as in case of sideways curving in spine
known as Scoliosis
*  Reduce excessive motion between two spinal bones which inhibits movement, which is a
common side effect of arthritis
*  To stabilize the spine after a damaged disk is removed

There are many options for treating any spinal complexities or back pain problems. To choose the
best alternative, it’s always better to consult with a spine specialist directly. It will clarify the right
approach to treating the problem and effectiveness of that treatment in the long-term. To know
more, give us a call now or book an appointment through the given form.
          
          `
        },
        {
          title: "Cervical Disc Replacement",
          slug: "cervical-disc-replacement",
          description: "Cervical Disc Replacement Surgery In Delhi",
          conditions: ["Cervical Disc Herniation", "Cervical Degenerative Disc Disease"],
          imagePath: "/images/cervical_disc.jpg",
          metatag: "Cervical Disc Replacement Surgeon In Delhi | Specialist at SGRH", 
          metades: "Cervical disc replacement surgery in Delhi by internationally-trained spine specialist at Sir Ganga Ram Hospital. 10+ yrs of experience. Book Appointment Now.",
          details: 
          `
          
Cervical discs are the cushions between the 7 bones stacked on top of each other making up the
cervical vertebrae. Patients in need of a cervical disc replacement surgeon in Delhi often look for
experts who can carry out the surgery carefully.

Spine specialists specifically trained for this procedure often look for symptoms such as neck
weakness, chronic pain or numbness to assess the need of the surgery. The cushions between
cervical bones help you move, bend, twist and also act as shock absorbers. Any degeneration is
highly restrictive to any movements along with the expected chronic pain.

Surgery is opted for only when non-surgical methods and when movement is restricted due to
severe pain. After this surgery, the movement is restored as the nerve roots get decompressed. To
know more about relieving your neck pain, book an appointment now.          

`
        },
        {
          title: "Complex Spine Deformity Correction",
          slug: "complex-spine-deformity-correction",
          description: "Complex Spine Deformity Correction Surgery in Delhi",
          conditions: ["Scoliosis", "Kyphosis", "Spinal Deformities"],
          imagePath: "/images/complex_deformity.webp",
          metatag: "Complex Spine Deformity Correction Surgeon In Delhi | 10+ yrs exp", 
          metades: "Complex Spine Deformity Correction surgery in Delhi by spine specialist at Sir Ganga Ram Hospital. 10+ yrs of experience. Consult Now.",
          details:           
          `
Abnormal curvature of spine is caused by various types of conditions such as scoliosis, kyphosis or
any other spine misalignments. If you’re suffering from such a kind of misalignment of the spine and
searching for Complex Spine Deformity Correction surgeon in Delhi, keep in mind the following
things:

Any degenerative deformity including trauma can be the reason behind such a curvature. The
misalignment can cause significant pain and affect functions of other organs such as lungs.

#### Benefits of Complex Spine Deformity Correction Surgery:

* The first and foremost is the alleviation of the pain caused by the problem
* Mobility is improved with daily activities getting easier
* The improvement of posture also helps in lifting the overall health

The spine is realigned by stabilizing it with metal hardware. The recovery after the procedure can
take months but improvement in quality of life has higher probability. To understand your
requirement better, talk to our spine specialist today.
          
          `
        }
      ]
    },
    {
      category: "Emergency & Trauma Procedures",
      slug: "emergency-and-trauma-procedures",
      procedures: [
        {
          title: "Spine Trauma Surgery",
          slug: "spine-trauma-surgery",
          description: "Spine Trauma Surgery In Delhi",
          conditions: ["Spinal Fractures", "Dislocations", "Spinal Cord Injuries"],
          imagePath: "/images/spine_truama.jpg",
          metatag: "Spine Trauma Surgeon In Delhi | Specialist at Ganga Ram Hospital", 
          metades: "Spine Trauma Surgery in Delhi by internationally-trained spine specialist at Sir Ganga Ram Hospital. 10+ yrs of experience. Book Consultation Now.",
          details: 
          `

Spine is a stack of bones (called vertebrae) protecting a tube inside called the spinal cord. This cord
sends messages between your brain and the rest of your body, such as telling your legs to walk or
your hands to grab something. Reaching a spine trauma surgeon in Delhi becomes important in such
emergency cases.

A spinal cord injury (SCI) is when this tube gets hurt. This often happens because of blunt trauma,
strong hit or twist, like bending too far forward, backward, getting squished, or twisted around. The
tube can bleed and swell up in such cases, which stops blood and oxygen from getting to the nerves
inside.

#### How it affects someone depends a lot on where the injury happened:

* If the signals are totally blocked below the injury spot, it&#39;s a complete injury. Nothing below
that spot gets the message.
* If some sensation signals can still get through, it&#39;s an incomplete injury. Some things might
still work or feel.
* An injury lower down, like below your chest, can make your legs weak or unable to move.
This is called paraplegia.
* An injury in your neck can affect all four of your arms and legs, making them weak or unable
to move. This is called quadriplegia.
* These injuries can mess up how you move, what you can feel, how your muscles react, and
even controlling when you go to the toilet or poo. Muscles might get really tight and jumpy,
or they might be floppy.

#### Right after an injury, helpers need to be really quick.

* Keep the spine from moving to prevent more harm.
* Make sure the person can breathe.
* Watch for dangerous problems like a type of shock called neurogenic shock, where the heart
rate and blood pressure get too low.
* They also watch for something scary called autonomic dysreflexia, which is when blood
pressure shoots up super high. If this happens, the most important first step is to sit the
person up.

#### To figure out exactly what&#39;s wrong, doctors use scans:

* X-rays to show the bones.
* CT scans to delve deeper into the bones.
* MRI scans for the spinal cord and disks.

Often, surgery is needed to take out broken bone pieces that are pushing on the spinal cord or to
make the spine strong and stable.

The world is moving on to newer ways for spine surgery called minimally invasive surgery (MISS).
These use smaller cuts than traditional open surgery ensuring less bleeding, shorter time in the
hospital, and a lower chance of an infection.

These surgeries are harder to do and need experience from the surgeon as it&#39;s harder to see inside.

Getting better after an SCI involves lots of rehabilitation. A team of helpers like physical therapists
work with the person. They help make muscles stronger and teach new ways to do everyday tasks.

How much someone recovers can be different for everyone and often depends on how bad the
injury was and where it was located. Recovery usually happens in the initial six months, however, it
may take up to a year or two for complete recovery. No doubt it’s a difficult phase in the patient’s
life. Talking to people who are suffering from spinal cord injuries may help.

If you’re looking for spine specialist to consult, fill the form on the website to book an appointment.
`
},
        {
          title: "Spinal Tumor Surgery",
          slug: "spinal-tumor-surgery",
          description: "Spinal Tumor Surgery In Delhi",
          conditions: ["Primary Spine Tumors", "Metastatic Spine Tumors"],
          imagePath: "/images/spine_tumor.jpeg",
           metatag: "Spinal Tumor Surgeon In Delhi | Specialist at Ganga Ram Hospital", 
          metades: "Spinal Tumor Surgery in Delhi by internationally-trained spine specialist at Sir Ganga Ram Hospital. 10+ yrs of experience. Book Consultation Now.",
          details: 
          `

The vertebrae, which is tunnel-like structure made with bones, protects your spinal cord. The cord
helps you move and feel sensations. Given its crucial role, the importance of keeping it healthy
cannot be overstated. If you’re looking for spinal tumor surgeon in Delhi, give us a call and our
expert will help you in this difficult journey.

A spinal tumor is a bump or growth of cells that shouldn&#39;t be there, either inside the spinal cord, in
its covering, or in the bones of the spine.

The bumps could either be non-cancerous (benign), meaning they don&#39;t spread to other parts of the
body or they are cancerous (malignant). Most of the time, cancerous spinal tumors happen because
cancer started somewhere else in the body and travelled to the spine. Tumors that originated in the
spine are less common.

Some spinal tumors are very small and don&#39;t cause any problems. But if a tumor grows, the bigger
size can affect your spinal cord or pushing the nerves in the area. This can cause symptoms.
The most common symptom is often back pain. It can be either in the middle or lower back, which
turn worse at night. It might even feel sharp and travel down your legs or arms.

#### When a tumor pushes on nerves, it can also cause other problems like:

* Sensation of tingling or numbness in limbs or chest.
* Muscles feeling weak, making it hard to walk.
* Muscles twitching or having spasms.
* Problems with bladder or bowel movements

To figure out if someone has a spinal tumor, doctors questions the patient about the movement and
sensations in the limbs before a complete check-up.          
          
They often use special cameras such as an MRI (Magnetic Resonance Imaging) for detailed pictures.
Sometimes, they use a CT scan too. To know the kind of tumor, they might take a small piece of it via
a biopsy.

Treatment depends on the tumor - 

* If a tumor is small and not causing problems, doctors might just observe it carefully over
time.
* Primary treatment is surgery to take out the tumor.
* Doctors might also use radiation therapy, using special rays to kill tumor cells or
chemotherapy using specific medicines.

The recovery period depends on the surgery and if the nerves were squished by the tumor. It may
take couple of weeks to a few months to get better after the surgery. This recovery period can be
much longer if the nerves were affected. After any surgery like this, a physical therapist can help
with recovery.

For consulting a trusted spine specialist, give us a call or book an appointment.

          `
        }
      ]
    }
  ];