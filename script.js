function downloadCV() {
    const link = document.createElement('a');
    link.href = './ResumeMohammed Yousufnoqr.pdf'; // Replace with the actual path to your PDF
    link.download = 'ResumeMohammedYousuf.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
