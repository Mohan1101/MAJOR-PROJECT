import React from "react";
import "./web.css";
import cc from "./assets/cc.png";
const Cc = () => {
  return (
    <>
      <main id="about">
        <div class="about">
          <div class="container-fluid pt-2">
            <h2 class="h2-responsive section-heading fw-bold text-center my-3">
              Cloud Computing
            </h2>
            <p class="text-center w-responsive  mt-1 mb-1">
              This course introduces you to the core concepts of cloud computing. You gain the foundational knowledge required for understanding cloud computing from a business perspective as also for becoming a cloud practitioner. You understand the definition and essential characteristics of cloud computing, its history, the business case for cloud computing, and emerging technology usecases enabled by cloud. We introduce you to some of the prominent service providers of our times (e.g. AWS, Google, IBM, Microsoft, etc.) the services they offer, and look at some case studies of cloud computing across industry verticals.

            </p>

            <div class="row pt-5">
              <div class="col-md-6 align-items-stretch">
                <img src={cc} alt=""
                  class="img-fluid shadow mb-2 bg-body rounded-3" />
              </div>
              <div class="col-md-6">
                <h2 class="h3-responsive fw-bold mt-3 mb-3 text-center">
                  What you'll learn
                </h2>

                <p class="lh-base">
                  You learn about the various cloud service models (IaaS, PaaS, SaaS) and deployment models (Public, Private, Hybrid) and the key components of a cloud infrastructure (VMs, Networking, Storage - File, Block, Object, CDN). We also cover emergent cloud trends and practices including - Hybrid Multicloud, Microservices, Serverless, DevOps, Cloud Native and Application Modernization. And we go over the basics of cloud security, monitoring, and different job roles in the cloud industry.
                  Even though this course does not require any prior cloud computing or programming experience, by the end of the course, you will have created your own account on IBM Cloud and gained some hands-on experience by provisioning a cloud service and working with it.
                </p>
                <p>
                  <h2 className=" h2-responsive fw-bold">Courses Offered</h2>
                  <ul>
                    <li>Define cloud computing and explain essential characteristics, history, the business case for cloud, and the emerging technologies enabled by cloud</li>
                    <li>Describe the cloud service models Describe cloud service models, cloud deployment models, and cloud infrastructure</li>
                    <li>Explain emerging Cloud related trends including HybridMulticloud, Microservices, Serverless, Cloud Native, DevOps, and Application Modernization</li>
                    <li>Create IBM Cloud account and provision an instance of cloud object storage service to host a static webpage.</li>
                  </ul>
                </p>
              </div>
            </div>


          </div>
        </div>

      </main>
    </>
  )



};
export default Cc;