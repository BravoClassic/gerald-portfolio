"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PdfViewer } from "@/components/pdf-viewer";
import { HtmlViewer } from "@/components/html-viewer";
import {
  ChevronRight,
  Download,
  FileText,
  BarChart,
  Mail,
  Github,
  Linkedin,
} from "lucide-react";
import { useRef, useState } from "react";

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState("resume");
  const coverRef = useRef<HTMLAnchorElement>(null);
  const resumeRef = useRef<HTMLAnchorElement>(null);
  const sampleRef = useRef<HTMLAnchorElement>(null);
  const sampleSectionRef = useRef<HTMLDivElement>(null);

  const scrollToSampleSection = () => {
    sampleSectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      {/* Header */}
      <header className="container mx-auto py-6 px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Gerald Akorli</h1>
            <p className="text-muted-foreground">Data Analyst</p>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="gap-2">
              <Mail className="h-4 w-4" />
              <span className="hidden sm:inline">Contact</span>
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <Github className="h-4 w-4" />
              <span className="hidden sm:inline">GitHub</span>
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <Linkedin className="h-4 w-4" />
              <span className="hidden sm:inline">LinkedIn</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto py-6 px-4 md:px-6 space-y-12">
        {/* Introduction */}
        <section className="max-w-3xl mx-auto text-center space-y-4">
          <h2 className="text-4xl font-bold tracking-tight">
            Application for Data Analyst at Clearwater Analytics
          </h2>
          <p className="text-xl text-muted-foreground">
            Experienced data analyst with expertise in R, tidyverse, and
            statistical modeling. Passionate about transforming complex data
            into actionable insights.
          </p>
          <div className="flex justify-center gap-4 pt-4">
            <Button
              className="gap-2 cursor-pointer"
              onClick={() => setActiveTab("resume")}
            >
              View Resume
              <ChevronRight className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollToSampleSection()}
              className="gap-2 cursor-pointer"
            >
              Sample Analysis
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </section>

        {/* Resume & Cover Letter Section */}
        <section className="space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight">
              Resume & Cover Letter
            </h2>
            <p className="text-muted-foreground mt-2">
              My qualifications and experience relevant to the Data Analyst
              position
            </p>
          </div>

          <Tabs defaultValue={activeTab} className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="resume">Resume</TabsTrigger>
              <TabsTrigger value="cover-letter">Cover Letter</TabsTrigger>
            </TabsList>
            <TabsContent value="resume" className="mt-4" key={"resume"}>
              <Card>
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Resume
                  </CardTitle>
                  <CardDescription>
                    My experience, skills, and qualifications
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted p-2 rounded-lg border h-[600px] overflow-auto">
                    <PdfViewer fileUrl="/assets/pdfs/resume.pdf" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="outline"
                    onClick={() => resumeRef.current?.click()}
                    className="gap-2 ml-auto cursor-pointer"
                  >
                    <a
                      ref={resumeRef}
                      href="/assets/pdfs/resume.pdf"
                      download
                      hidden
                    ></a>
                    <Download className="h-4 w-4" />
                    Download Resume
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent
              value="cover-letter"
              className="mt-4"
              key={"cover-letter"}
            >
              <Card>
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Cover Letter
                  </CardTitle>
                  <CardDescription>
                    Why I&apos;m a great fit for Clearwater Analytics
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted p-2 rounded-lg border h-[600px] overflow-auto">
                    <PdfViewer fileUrl="/assets/pdfs/cover_letter.pdf" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="outline"
                    onClick={() => coverRef.current?.click()}
                    className="gap-2 ml-auto cursor-pointer"
                  >
                    <a
                      ref={coverRef}
                      href="/assets/pdfs/cover_letter.pdf"
                      download
                      hidden
                    ></a>
                    <Download className="h-4 w-4" />
                    Download Cover Letter
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        {/* Sample Work Section */}
        <section className="space-y-6" ref={sampleSectionRef}>
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight">
              Data Analysis Work
            </h2>
            <p className="text-muted-foreground mt-2">
              Demonstrating my skills in R, tidyverse, and statistical modeling
            </p>
          </div>

          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart className="h-5 w-5" />
                Data Analysis Project
              </CardTitle>
              <CardDescription>
                A comprehensive analysis using R, tidyverse, and statistical
                modeling techniques
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-white rounded-lg border h-[600px] overflow-auto">
                <HtmlViewer htmlContent="/assets/html/sample-analysis.html" />
              </div>
            </CardContent>
            <CardFooter>
              <Button
                variant="outline"
                onClick={() => sampleRef.current?.click()}
                className="gap-2 ml-auto cursor-pointer"
              >
                <a
                  href="/assets/html/sample-analysis.html"
                  download
                  className="hidden"
                  ref={sampleRef}
                ></a>
                <Download className="h-4 w-4" />
                Download Full Analysis
              </Button>
            </CardFooter>
          </Card>
        </section>

        {/* Skills Section */}
        <section className="max-w-4xl mx-auto space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight">Key Skills</h2>
            <p className="text-muted-foreground mt-2">
              Relevant technical and soft skills for the Data Analyst position
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Technical Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>R Programming & tidyverse ecosystem</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Statistical modeling & tidymodels</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Data visualization & dashboard creation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>SQL & database management</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Python for data analysis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Git version control</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Soft Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Data storytelling & presentation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Problem-solving & critical thinking</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Project management</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Attention to detail</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Business acumen</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/50 mt-12">
        <div className="container mx-auto py-8 px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <h3 className="font-semibold">Gerald Akorli</h3>
              <p className="text-sm text-muted-foreground">Data Analyst</p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <Mail className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>
          <div className="mt-6 text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Gerald Akorli. All rights
            reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
