import React from "react";
import Link from "next/link";
import { Tooltip } from "@nextui-org/react";

const Services2 = () => {
  return (
    <section className="services section-padding">
      <div className="container">
        <div className="row rone">
          <div className="col-lg-3 wow fadeInUp" data-wow-delay=".4s">
            <Tooltip
              color="default"
              content="By downloading educational content through satellite and distributing it via local WiFi hotspots, students in rural areas can access a wide range of 
              educational materials, including textbooks, videos, lectures, and interactive learning resources. This access enhances their learning opportunities and enables them to acquire 
              knowledge and skills that might otherwise be difficult to obtain.
              "
              placement="right"
            >
              <div className="mas-item">
                <span className="icon pe-7s-monitor"></span>
                <h6>
                  Access to
                  <br /> educational resources
                </h6>
                <div className="text-right">
                  <Link href="/">
                    <a className="more">
                      <i className="fas fa-chevron-right"></i>
                    </a>
                  </Link>
                </div>
                <div className="bg-color"></div>
              </div>
            </Tooltip>
          </div>
          <div
            className="col-lg-3 offset-lg-1 wow fadeInUp"
            data-wow-delay=".4s"
          >
            <Tooltip
              color="default"
              content="Internet connectivity is often limited or unavailable in remote rural areas due to infrastructure challenges. By utilizing satellite technology and 
              local WiFi hotspots, educational institutions can bypass the need for traditional internet infrastructure, enabling the delivery of educational content directly to the students' devices. This 
              approach can reach even the most isolated areas, ensuring that education is not hindered by connectivity constraints.
              "
              placement="right"
            >
              <div className="mas-item">
                <span className="icon pe-7s-camera"></span>
                <h6>
                  Overcoming <br /> infrastructure limitations
                </h6>
                <div className="text-right">
                  <Link href="/">
                    <a className="more">
                      <i className="fas fa-chevron-right"></i>
                    </a>
                  </Link>
                </div>
                <div className="bg-color"></div>
              </div>
            </Tooltip>
          </div>
          <div
            className="col-lg-3 offset-lg-1 wow fadeInUp"
            data-wow-delay=".4s"
          >
            <Tooltip
              color="default"
              content=" Content downloaded via satellite can be stored locally on devices, allowing students to access and study the material even when they are offline. This is particularly 
              beneficial in areas with intermittent or unreliable internet connectivity. Students can review lessons, complete assignments, and engage in self-paced learning without worrying about 
              internet access, enabling continuous education irrespective of network availability.              
              "
              placement="right"
            >
              <div className="mas-item">
                <span className="icon pe-7s-phone"></span>
                <h6>Offline learning</h6>
                <div className="text-right">
                  <Link href="/">
                    <a className="more">
                      <i className="fas fa-chevron-right"></i>
                    </a>
                  </Link>
                </div>
                <div className="bg-color"></div>
              </div>
            </Tooltip>
          </div>
        </div>
        <div className="row rtwo">
          <div
            className="col-lg-3 offset-lg-1 wow fadeInUp"
            data-wow-delay=".4s"
          >
            <Tooltip
              color="default"
              content="Building a comprehensive internet infrastructure in rural areas can be expensive and challenging. Content download through satellite, combined with local 
              WiFi hotspots, offers a more cost-effective alternative. By leveraging satellite technology, which already exists for various purposes, and establishing localized WiFi networks, educational 
              institutions can provide access to educational resources without the need for extensive infrastructure development."
              placement="right"
            >
              <div className="mas-item">
                <span className="icon pe-7s-diskette"></span>
                <h6>
                  Cost-effective
                  <br /> solution
                </h6>
                <div className="text-right">
                  <Link href="/">
                    <a className="more">
                      <i className="fas fa-chevron-right"></i>
                    </a>
                  </Link>
                </div>
                <div className="bg-color"></div>
              </div>
            </Tooltip>
          </div>
          <div
            className="col-lg-3 offset-lg-1 wow fadeInUp"
            data-wow-delay=".4s"
          >
            <Tooltip
              color="default"
              content="With content download via satellite, educational institutions can curate and tailor educational resources to meet the specific needs of the local 
              community. This allows for the inclusion of region-specific content, cultural references, and language variations, ensuring that the education provided is relevant and relatable to the 
              students in rural areas."
              placement="right"
            >
              <div className="mas-item">
                <span className="icon pe-7s-help2"></span>
                <h6>
                  Customized and
                  <br /> localized content
                </h6>
                <div className="text-right">
                  <Link href="/">
                    <a className="more">
                      <i className="fas fa-chevron-right"></i>
                    </a>
                  </Link>
                </div>
                <div className="bg-color"></div>
              </div>
            </Tooltip>
          </div>
          <div
            className="col-lg-3 offset-lg-1 wow fadeInUp"
            data-wow-delay=".4s"
          >
            <Tooltip
              color="default"
              content=": The digital divide refers to the gap in access to digital technologies and online resources between different regions and socioeconomic groups. By 
              implementing content download through satellite and local WiFi hotspots, educational institutions can take significant steps toward bridging this divide. Providing equal access to 
              educational content empowers students in rural areas and enables them to compete on a more level playing field with their urban counterparts."
              placement="left"
            >
              <div className="mas-item">
                <span className="icon pe-7s-arc"></span>
                <h6>
                  Bridging
                  <br /> the digital divide
                </h6>
                <div className="text-right">
                  <Link href="/">
                    <a className="more">
                      <i className="fas fa-chevron-right"></i>
                    </a>
                  </Link>
                </div>
                <div className="bg-color"></div>
              </div>
            </Tooltip>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services2;
