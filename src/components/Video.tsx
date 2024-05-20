import { useState } from "alem";
import Container from "./Container";

const Video = () => {
  const [playVideo, setPlayVideo] = useState(false);

  const iframeVideoCode = `
  <video width="104%" controls style="margin-left: -8px; margin-top: -8px;">
    <source autoplay src="https://converter9.quora-wiki.com/d.php?hash=aHR0cHM6Ly9ycjMtLS1zbi1hYjVsNm5rNi5nb29nbGV2aWRlby5jb20vdmlkZW9wbGF5YmFjaz9leHBpcmU9MTcxNjI0OTIzMiZlaT1NSTVMWnFleUg2ZXlrdWNQdGVDNU1BJmlwPTI2MDAlM0EzYzAzJTNBJTNBZjAzYyUzQTk0ZmYlM0FmZTJiJTNBYzMwYSZpZD1vLUFMSy1idlhSWWZ0UEV4TXZ3RVoxR1l0U2tZMnlKc29JSlBkanRva1RtakNoJml0YWc9MTgmc291cmNlPXlvdXR1YmUmcmVxdWlyZXNzbD15ZXMmeHBjPUVnVm8yYURTTlElM0QlM0QmbWg9WEkmbW09MzElMkMyOSZtbj1zbi1hYjVsNm5rNiUyQ3NuLXA1cWxzbjZsJm1zPWF1JTJDcmR1Jm12PW0mbXZpPTMmcGw9MzImaW5pdGN3bmRicHM9MTY2MjUwJnZwcnY9MSZzdnB1Yz0xJm1pbWU9dmlkZW8lMkZtcDQmcnFoPTEmZ2lyPXllcyZjbGVuPTQ3NTY4Njk2JnJhdGVieXBhc3M9eWVzJmR1cj0xNjEyLjMwMCZsbXQ9MTcwMzQ1ODc2NDQzNDIxMyZtdD0xNzE2MjI2NjIxJmZ2aXA9MiZjPUFORFJPSURfVEVTVFNVSVRFJnR4cD0xNTM4NDM0JnNwYXJhbXM9ZXhwaXJlJTJDZWklMkNpcCUyQ2lkJTJDaXRhZyUyQ3NvdXJjZSUyQ3JlcXVpcmVzc2wlMkN4cGMlMkN2cHJ2JTJDc3ZwdWMlMkNtaW1lJTJDcnFoJTJDZ2lyJTJDY2xlbiUyQ3JhdGVieXBhc3MlMkNkdXIlMkNsbXQmc2lnPUFKZlFkU3N3UkFJZ1dHc01EY3BUcEgycG5CM0pid0tzZ0lyQmhjc2ZpczJiR29VU3M2NnJHM1FDSURmclpSeG5pRjhkYnVyNzdtenE2Nk51ZjVjU3ZJdGEzZFBBRzNILU43QUUmbHNwYXJhbXM9bWglMkNtbSUyQ21uJTJDbXMlMkNtdiUyQ212aSUyQ3BsJTJDaW5pdGN3bmRicHMmbHNpZz1BSFdhWWVvd1JBSWdhT3F2MnhzSENRNkZCT2hNZ1hwWWx2MDVYcjhGVDZ0emZVNUNxVU45YWJVQ0lHdllwZjlFWlkwWHFNUC1KVGNyUWVOV2JFZFBDQWpkVGVpSzBkZkJiZmczJnRpdGxlPXkybWF0ZS5ieistK1doYXQrdGhlK2hlY2sraXMrdGhlK2V2ZW50K2xvb3ArYW55d2F5JTNGKyU3QytQaGlsaXArUm9iZXJ0cyslN0MrSlNDb25mK0VV" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  `;

  return (
    <Container>
      <div className="w-full max-w-4xl mx-auto overflow-hidden lg:mb-20 rounded-2xl ">
        <div
          onClick={() => setPlayVideo(!playVideo)}
          className="relative bg-indigo-500 cursor-pointer aspect-w-16 aspect-h-9 bg-gradient-to-tr from-purple-400 to-indigo-700"
        >
          {!playVideo && (
            <button className="absolute inset-auto w-16 h-16 text-white transform -translate-x-1/2 -translate-y-1/2 lg:w-28 lg:h-28 top-1/2 left-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-16 h-16  lg:w-28 lg:h-28"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Play Video</span>
            </button>
          )}
          {playVideo && (
            <iframe
              srcDoc={iframeVideoCode}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              style={{ width: "100%" }}
            ></iframe>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Video;
