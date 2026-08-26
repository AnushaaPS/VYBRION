const courses = [
  // Software Courses
  {id:"autocad", name:"AutoCAD", type:"software", duration:"6 Weeks", fee:"₹3,299", desc:"A practical CAD course covering 2D drafting workflows, drawing management and a complete working-drawing package."},
  {id:"staad", name:"STAAD.Pro", type:"software", duration:"8 Weeks", fee:"₹5,999", desc:"Structural analysis and design using 3D modelling, loading, result interpretation and RC/steel design workflows."},
  {id:"safe", name:"CSI SAFE", type:"software", duration:"5 Weeks", fee:"₹4,399", desc:"Structural foundation and slab analysis/design workflows with a portfolio-oriented capstone."},
  {id:"etabs", name:"ETABS", type:"software", duration:"7 Weeks", fee:"₹5,499", desc:"3D building analysis and design covering gravity, wind and seismic analysis, drift checks and RC/steel design."},
  {id:"rcdc", name:"RCDC", type:"software", duration:"4 Weeks", fee:"₹3,799", desc:"Practical RC detailing and design workflow for producing professional structural deliverables."},
  {id:"idea", name:"IDEA StatiCa", type:"software", duration:"4 Weeks", fee:"₹4,999", desc:"Steel connection design and verification workflows, including a sample industrial structure connection project."},
  {id:"revit-arch", name:"Revit Architecture", type:"software", duration:"7 Weeks", fee:"₹6,999", desc:"BIM authoring from parametric building modelling and families to construction documentation."},
  {id:"revit-struct", name:"Revit Structure", type:"software", duration:"7 Weeks", fee:"₹5,499", desc:"Structural BIM covering columns, beams, footings, slabs, rebar, coordination and documentation."},
  {id:"sketchup", name:"SketchUp", type:"software", duration:"5 Weeks", fee:"₹5,999", desc:"Fast 3D conceptual modelling with materials, site context, scenes and presentation-ready output."},
  {id:"lumion", name:"Lumion", type:"software", duration:"4 Weeks", fee:"₹3,799", desc:"Photorealistic rendering and animation for architectural models, environments and walkthroughs."},
  {id:"primavera", name:"Primavera P6", type:"software", duration:"5 Weeks", fee:"₹5,399", desc:"Construction planning and scheduling workflows designed around professional project-management practice."},
  {id:"navisworks", name:"Navisworks", type:"software", duration:"4 Weeks", fee:"₹3,799", desc:"Model coordination and practical digital-construction workflows for multidisciplinary projects."},

  // Technical Courses
  {id:"mechanics", name:"Engineering Mechanics", type:"technical", duration:"4 Weeks", fee:"₹1,699", desc:"Foundation mechanics covering force systems, equilibrium, free-body diagrams, trusses, friction and beam loading."},
  {id:"structural-analysis", name:"Structural Analysis", type:"technical", duration:"6 Weeks", fee:"₹2,799", desc:"Classical structural analysis covering determinate and indeterminate structures, frames, trusses, arches and influence lines."},
  {id:"rcc", name:"RCC Design", type:"technical", duration:"8 Weeks", fee:"₹3,299", desc:"Limit-state design of beams, slabs, columns and footings as per IS 456, ending in a complete RC design package."},
  {id:"steel", name:"Steel Structure Design", type:"technical", duration:"8 Weeks", fee:"₹3,299", desc:"Steel design as per IS 800 covering members, connections, base plates and industrial roof trusses."},
  {id:"prestressed", name:"Prestressed Concrete", type:"technical", duration:"6 Weeks", fee:"₹2,199", desc:"Prestressing concepts, loss calculations and design of prestressed beams/slabs with a bridge or girder case study."},
  {id:"fea", name:"Finite Element Analysis", type:"technical", duration:"6 Weeks", fee:"₹2,799", desc:"Conceptual and applied FEA covering discretization, stiffness matrices, 1D/2D elements and software validation."},
  {id:"surveying", name:"Surveying", type:"technical", duration:"5 Weeks", fee:"₹2,199", desc:"Field-and-office surveying with chain, compass, levelling, theodolite, contouring, total station and GPS workflows."},
  {id:"materials", name:"Building Materials & Concrete Technology", type:"technical", duration:"5 Weeks", fee:"₹2,199", desc:"Cement, aggregates, admixtures, concrete grades, mix design, testing, durability and quality control."},
  {id:"construction-tech", name:"Construction Technology", type:"technical", duration:"5 Weeks", fee:"₹2,199", desc:"Practical construction sequencing from foundation to finishing, including formwork, scaffolding, masonry and modern methods."},
  {id:"geotech", name:"Geotechnical Engineering", type:"technical", duration:"6 Weeks", fee:"₹2,799", desc:"Soil mechanics, classification, strength and bearing-capacity concepts supporting safe foundation design."},
  {id:"foundation", name:"Foundation Engineering", type:"technical", duration:"6 Weeks", fee:"₹2,799", desc:"Shallow, pile, raft and mat foundation design with site investigation and problematic-soil considerations."},
  {id:"quantity", name:"Quantity Surveying & Estimation", type:"technical", duration:"5 Weeks", fee:"₹2,799", desc:"Quantity take-off, earthwork, concrete and masonry estimation, rate analysis and professional BOQ preparation."},
  {id:"planning", name:"Construction Planning & Management", type:"technical", duration:"5 Weeks", fee:"₹2,799", desc:"Construction project life cycle, WBS, bar charts, CPM, PERT, resource planning and basic cost control."},
  {id:"bim", name:"BIM & Digital Construction", type:"technical", duration:"5 Weeks", fee:"₹3,299", desc:"Digital construction concepts and coordinated BIM workflows connecting models, information and project delivery."}
];

const grid = document.getElementById("courseGrid");
const search = document.getElementById("courseSearch");
const filters = document.querySelectorAll(".filter");
const courseSelect = document.getElementById("course");

let currentFilter = "all";

function renderCourses(){
    const query = (search.value || "").trim().toLowerCase();
    const filtered = courses.filter(c => {
        const categoryOk = currentFilter === "all" || c.type === currentFilter;
        const searchOk = !query || `${c.name} ${c.type} ${c.desc}`.toLowerCase().includes(query);
        return categoryOk && searchOk;
    });

    grid.innerHTML = filtered.map(c => `
        <article class="course-card">
            <div class="course-top">
                <span class="course-type">${c.type === "software" ? "SOFTWARE COURSE" : "TECHNICAL COURSE"}</span>
                <span class="course-duration">${c.duration}</span>
            </div>
            <h3>${c.name}</h3>
            <p>${c.desc}</p>
            <div class="course-bottom">
                <div class="course-price">
                    <span>Student fee</span>
                    <strong>${c.fee}</strong>
                </div>
                <button class="details-btn" data-id="${c.id}">VIEW DETAILS →</button>
            </div>
        </article>
    `).join("");

    if(!filtered.length){
        grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:50px;color:#667487">No matching courses found.</div>`;
    }

    document.querySelectorAll(".details-btn").forEach(btn => {
        btn.addEventListener("click", () => openCourse(btn.dataset.id));
    });
}

function populateSelect(){
    courses.forEach(c => {
        const option = document.createElement("option");

        option.value = c.name;
        option.textContent =
            `${c.name} — ${c.duration} — ${c.fee}`;

        courseSelect.appendChild(option);
    });
}


const modal = document.getElementById("courseModal");
const modalTitle = document.getElementById("modalTitle");
const modalCategory = document.getElementById("modalCategory");
const modalMeta = document.getElementById("modalMeta");
const modalDescription = document.getElementById("modalDescription");

function openCourse(id){
    const c = courses.find(x => x.id === id);
    if(!c) return;
    modalCategory.textContent = c.type === "software" ? "SOFTWARE COURSE" : "TECHNICAL COURSE";
    modalTitle.textContent = c.name;
    modalMeta.innerHTML = `<span>${c.duration}</span><span>${c.fee} student fee</span><span>Capstone + Certification</span>`;
    modalDescription.textContent = c.desc;
    modal.classList.add("open");
    modal.setAttribute("aria-hidden","false");
    document.body.style.overflow = "hidden";
}

function closeModal(){
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden","true");
    document.body.style.overflow = "";
}

document.querySelectorAll("[data-close-modal]").forEach(el => el.addEventListener("click", closeModal));
document.addEventListener("keydown", e => { if(e.key === "Escape") closeModal(); });

filters.forEach(btn => {
    btn.addEventListener("click", () => {
        filters.forEach(x => x.classList.remove("active"));
        btn.classList.add("active");
        currentFilter = btn.dataset.filter;
        renderCourses();
    });
});

search.addEventListener("input", renderCourses);

// Mobile navigation
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
menuToggle.addEventListener("click", () => {
    const open = mainNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", open);
});
mainNav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded","false");
}));

populateSelect();
renderCourses();

const enquiryForm = document.getElementById("enquiryForm");

if (enquiryForm) {

    enquiryForm.addEventListener("submit", async function (event) {

        event.preventDefault();

        const sendBtn = document.getElementById("sendBtn");
        const formStatus = document.getElementById("formStatus");

        sendBtn.disabled = true;
        sendBtn.textContent = "Sending...";

        formStatus.style.display = "none";
        formStatus.textContent = "";

        try {

            const formData = new FormData(enquiryForm);

            const data = Object.fromEntries(
                formData.entries()
            );

            console.log("Sending enquiry:", data);

            const response = await fetch(
                "https://formsubmit.co/ajax/jeyal2007@gmail.com",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    },

                    body: JSON.stringify(data)
                }
            );

            console.log(
                "Response status:",
                response.status
            );

            const result = await response.json();

            console.log(
                "FormSubmit response:",
                result
            );

            if (
                response.ok &&
                (
                    result.success === true ||
                    result.success === "true"
                )
            ) {

                formStatus.textContent =
                    "Enquiry sent successfully. We'll connect you soon.";

                formStatus.className =
                    "form-status success";

                formStatus.style.display =
                    "block";

                enquiryForm.reset();

                sendBtn.textContent =
                    "Sent ✓";

                setTimeout(function () {

                    sendBtn.textContent =
                        "Send Enquiry";

                    sendBtn.disabled =
                        false;

                }, 3000);

            } else {

                throw new Error(
                    result.message ||
                    "Form submission failed"
                );
            }

        } catch (error) {

            console.error(
                "FORM ERROR:",
                error
            );

            formStatus.textContent =
                "Unable to send your enquiry. Please try again.";

            formStatus.className =
                "form-status error";

            formStatus.style.display =
                "block";

            sendBtn.textContent =
                "Send Enquiry";

            sendBtn.disabled =
                false;
        }

    });
}
