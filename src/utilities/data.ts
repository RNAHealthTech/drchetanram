export interface Procedure {
    title: string;
    slug: string;
    description: string;
    conditions: string[];
    imagePath: string;
    details?: string;  // Additional content for the template page
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
          description: "Advanced minimally invasive technique using small incisions and specialized instruments to treat herniated discs, spinal stenosis, and other conditions with reduced recovery time and minimal tissue damage.",
          conditions: ["Herniated Disc", "Spinal Stenosis", "Degenerative Disc Disease"],
          imagePath: "/images/endoscopic_surgery.jpg",
          details: "Endoscopic spine surgery is a cutting-edge minimally invasive approach that allows surgeons to treat various spine conditions through tiny incisions. This technique offers numerous benefits including faster recovery, less post-operative pain, and minimal scarring."
        },
        {
          title: "Microdiscectomy",
          slug: "microdiscectomy",
          description: "Precise surgical procedure to remove herniated disc material that is pressing on nerve roots or the spinal cord, performed through a small incision using microscopic visualization.",
          conditions: ["Herniated Disc", "Sciatica", "Radiculopathy"],
          imagePath: "/images/microdiscectomy.jpg",
          details: "Microdiscectomy is a specialized surgical procedure that targets herniated disc material with precision. Using microscopic visualization, surgeons can effectively remove problematic disc material while minimizing trauma to surrounding tissues."
        },
        {
          title: "Kyphoplasty/Vertebroplasty",
          slug: "kyphoplasty-vertebroplasty",
          description: "Minimally invasive procedures to treat vertebral compression fractures by stabilizing the fracture and restoring vertebral height.",
          conditions: ["Vertebral Compression Fractures", "Osteoporotic Fractures"],
          imagePath: "/images/vertebral.png",
          details: "Kyphoplasty and vertebroplasty are innovative procedures designed to address vertebral compression fractures. These techniques help restore vertebral height and provide immediate stability to fractured vertebrae."
        }
      ]
    },
    {
      category: "Advanced Spine Surgeries",
      slug: "advanced-spine-surgeries",
      procedures: [
        {
          title: "Spinal Fusion Surgery",
          slug: "spinal-fusion-surgery",
          description: "Surgical procedure that permanently connects two or more vertebrae to improve stability, correct deformity, or reduce pain.",
          conditions: ["Spondylolisthesis", "Degenerative Disc Disease", "Spinal Deformities"],
          imagePath: "/images/spine_fusion.jpg",
          details: "Spinal fusion is a complex surgical procedure that joins vertebrae together to eliminate motion between them. This procedure is particularly effective for treating conditions that cause spinal instability or chronic pain. The surgery involves using bone grafts and specialized hardware to create a solid bond between vertebrae."
        },
        {
          title: "Cervical Disc Replacement",
          slug: "cervical-disc-replacement",
          description: "Advanced procedure to replace damaged cervical disc with an artificial disc to maintain motion and reduce adjacent segment degeneration.",
          conditions: ["Cervical Disc Herniation", "Cervical Degenerative Disc Disease"],
          imagePath: "/images/cervical_disc.jpg",
          details: "Cervical disc replacement is an innovative alternative to traditional fusion surgery. By replacing the damaged disc with an artificial one, this procedure preserves natural neck motion and potentially reduces the risk of adjacent segment disease. The artificial disc is designed to mimic the function of a natural cervical disc."
        },
        {
          title: "Complex Spine Deformity Correction",
          slug: "complex-spine-deformity-correction",
          description: "Comprehensive surgical approach to correct spinal deformities and restore proper alignment of the spine.",
          conditions: ["Scoliosis", "Kyphosis", "Spinal Deformities"],
          imagePath: "/images/complex_deformity.webp",
          details: "Complex spine deformity correction involves sophisticated surgical techniques to address severe spinal curvatures and misalignments. This procedure may involve multiple surgical approaches and specialized instrumentation to achieve optimal spinal alignment and balance."
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
          description: "Emergency surgical interventions for acute spinal injuries to stabilize the spine and prevent further neurological damage.",
          conditions: ["Spinal Fractures", "Dislocations", "Spinal Cord Injuries"],
          imagePath: "/images/spine_truama.jpg",
          details: "Spine trauma surgery encompasses various emergency procedures designed to address acute spinal injuries. The primary goals are to stabilize the spine, decompress neural elements, and prevent further injury. These procedures often require rapid decision-making and may involve multiple surgical approaches based on the injury pattern."
        },
        {
          title: "Spinal Tumor Surgery",
          slug: "spinal-tumor-surgery",
          description: "Surgical removal of benign or malignant tumors affecting the spine with focus on preserving neurological function.",
          conditions: ["Primary Spine Tumors", "Metastatic Spine Tumors"],
          imagePath: "/images/spine_tumor.jpeg",
          details: "Spinal tumor surgery requires careful planning and precise execution to remove tumors while protecting vital neural structures. The approach varies depending on tumor location, size, and type. Modern surgical techniques, including minimally invasive approaches when appropriate, are used to maximize tumor removal while minimizing impact on healthy tissue."
        }
      ]
    }
  ];