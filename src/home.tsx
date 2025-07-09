// import { Link } from 'react-router-dom';
// import cvPdf from './assets/new_cv.pdf';

function Home() {
    return (
        <div>
            <div className="initMsg" style={{ padding: '40px 500px', fontFamily: 'Times New Roman' }}>
                <h2>Ayush Tambde</h2>
                <p>I'm a theoretical physics sophomore from Ireland currently living in San Francisco</p>
                <p>I've worked on quantum computing, systems biology and systems programming</p>
                <p>Best Overall Individual at <a href="https://btyoungscientist.com/">BT Young Scientist</a> 2023 for developing <a href="https://a.co/d/bktLeRg">quantitative signalling models</a> of luminal and basal breast cancer cells. 
                This was an independent project later absorbed into <a href="https://pubmed.ncbi.nlm.nih.gov/39001416/">a larger study</a>.</p>

                On leave from University College Dublin

                <br></br>
                <h3>Work</h3>
                <ul id="normallist">
                   <li>Trading engines and VM orchestrators @  <a href="https://sfcompute.com">SFCompute</a></li>
                    
                    <li><a href="https://github.com/at2005/DeepSeek-V3-SFT">DeepSeek-V3 671B LoRA SFT Framework</a></li>

                    <li>Searched for "Planet Nine" by rewriting the <a href="https://github.com/at2005/p9-integrator">Mercury integrator in CUDA</a> and running sims on H100s</li>

                    <li><a href="https://github.com/at2005/flashmetal">FlashAttention for Apple Silicon</a> because I really wanted to train models on my Macbook</li>

                    <li><a href="https://github.com/at2005/hodl">A compiled quantum programming language</a></li>

                    <li><a href="https://github.com/at2005/QEMU-Quantum-PCI-Device">Quantum PCI device emulator</a> in QEMU</li>

                    <li><a href="https://github.com/at2005/qudos">OS kernel</a> with syscalls for interfacing with the above PCI device</li>
                </ul>
                <br></br>
                <p>I'm part of <a href="https://www.mercatus.org/emergent-ventures">Emergent Ventures</a> and a <a href="https://unitary.fund/grants">Unitary Foundation</a> grant recipient</p>
                <a href="https://x.com/atamb_">Twitter</a> | <a href="https://github.com/at2005">Github</a>
            </div>
        </div>
    );
}

export default Home;