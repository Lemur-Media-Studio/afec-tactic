import {
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBRow,
    MDBTypography,
  } from "mdb-react-ui-kit";
import ZoomIn from "./Animations/ZoomIn";

function Testimonials(){
    return(    
        <MDBContainer className="py-5 testimonials-container">
        <MDBRow className="d-flex justify-content-center">
        <MDBCol md="10" xl="8" className="text-center">
            <p className="mb-4 pb-2 mb-md-5 pb-md-0 p-testimonials">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam eum a pariatur veniam.
            </p>
        </MDBCol>
        </MDBRow>
        <MDBRow className="text-center">
            <MDBCol md="4" className="mb-5 mb-md-0">
                <ZoomIn>
                <div className="d-flex justify-content-center mb-4">
                <img
                    src="https://imagenes.elpais.com/resizer/aLgNPhpEET_piZtSB7wzOeLq4B0=/980x980/cloudfront-eu-central-1.images.arcpublishing.com/prisa/LRANCB25RBMURRSIPBI6QKNMDM.jpg"
                    className="rounded-circle shadow-1-strong"
                    width="150"
                    height="150"
                />
                </div>
                <h5 className="mb-3 h5-testimonials">Pep Guardiola</h5>
                <h6 className="text-primary mb-3 h6-testimonials">Míster</h6>
                <p className="px-xl-3 p-testimonials">
                <MDBIcon fas icon="quote-left" className="pe-2" />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.
                </p>
                <MDBTypography
                listUnStyled
                className="d-flex justify-content-center mb-0"
                >
                <li>
                    <MDBIcon fas icon="star" size="sm" className="text-warning" />
                </li>
                <li>
                    <MDBIcon fas icon="star" size="sm" className="text-warning" />
                </li>
                <li>
                    <MDBIcon fas icon="star" size="sm" className="text-warning" />
                </li>
                <li>
                    <MDBIcon fas icon="star" size="sm" className="text-warning" />
                </li>
                <li>
                    <MDBIcon fas icon="star" size="sm" className="text-warning" />
                </li>
                </MDBTypography>
                </ZoomIn>
            </MDBCol>

            <MDBCol md="4" className="mb-5 mb-md-0">
                <ZoomIn>
                <div className="d-flex justify-content-center mb-4">
                <img
                    src="https://fotografias.lasexta.com/clipping/cmsimages01/2022/08/13/8A3BB204-3A27-4D39-8A0C-C0F1BAEDE890/carlo-ancelotti-entrenador-real-madrid_104.jpg?crop=858,858,x241,y0&width=1200&height=1200&optimize=low&format=webply"
                    className="rounded-circle shadow-1-strong"
                    width="150"
                    height="150"
                />
                </div>
                <h5 className="mb-3 h5-testimonials">Carlo Ancelotti</h5>
                <h6 className="text-primary mb-3 h6-testimonials">Míster</h6>
                <p className="px-xl-3 p-testimonials">
                <MDBIcon fas icon="quote-left" className="pe-2" />
                Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
                suscipit laboriosam, nisi ut aliquid commodi.
                </p>
                <MDBTypography
                listUnStyled
                className="d-flex justify-content-center mb-0"
                >
                <li>
                    <MDBIcon fas icon="star" size="sm" className="text-warning" />
                </li>
                <li>
                    <MDBIcon fas icon="star" size="sm" className="text-warning" />
                </li>
                <li>
                    <MDBIcon fas icon="star" size="sm" className="text-warning" />
                </li>
                <li>
                    <MDBIcon fas icon="star" size="sm" className="text-warning" />
                </li>
                <li>
                    <MDBIcon fas icon="star" size="sm" className="text-warning" />
                </li>
                </MDBTypography>
                </ZoomIn>
            </MDBCol>

            <MDBCol md="4" className="mb-5 mb-md-0">
                <ZoomIn>
                <div className="d-flex justify-content-center mb-4">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9dPxDQEbkO6NAyBV4k6MFV0S_w9azz32AAQ&usqp=CAU"
                    className="rounded-circle shadow-1-strong"
                    width="150"
                    height="150"
                />
                </div>
                <h5 className="mb-3 h5-testimonials">José Mourinho</h5>
                <h6 className="text-primary mb-3 h6-testimonials">Míster</h6>
                <p className="px-xl-3 p-testimonials">
                <MDBIcon fas icon="quote-left" className="pe-2" />
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti.
                </p>
                <MDBTypography
                listUnStyled
                className="d-flex justify-content-center mb-0"
                >
                <li>
                    <MDBIcon fas icon="star" size="sm" className="text-warning" />
                </li>
                <li>
                    <MDBIcon fas icon="star" size="sm" className="text-warning" />
                </li>
                <li>
                    <MDBIcon fas icon="star" size="sm" className="text-warning" />
                </li>
                <li>
                    <MDBIcon fas icon="star" size="sm" className="text-warning" />
                </li>
                <li>
                    <MDBIcon fas icon="star" size="sm" className="text-warning" />
                </li>
                </MDBTypography>
                </ZoomIn>
            </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}

export default Testimonials