use clap::{Parser, Subcommand};
use serde::{Deserialize, Serialize};
use std::io::Read;

#[derive(Serialize, Deserialize, Debug)]
struct Project {
    url: String,
    descript: String,
}

#[derive(Parser, Debug)]
#[clap(author, version, about, long_about = None)]
struct Cli {
    #[clap(subcommand)]
    command: Commands,
}


#[derive(Subcommand, Debug)]
enum Commands {
    // adds project
    Add {
        #[clap(short = 'u', long, help = "URL of the project")]
        url: String,
        #[clap(short = 'd', long, help = "Description of the project")]
        descript: String,
    },


}

fn add_project_to_file(url : String, descript : String) {
    // add project to file
    // read json file
    let mut file = std::fs::OpenOptions::new()
        .read(true)
        .write(true)
        .open("/Users/atamb/ayush/src/assets/project_list.json")
        .unwrap();
    let mut json_from_file = String::new();
    file.read_to_string(&mut json_from_file).unwrap();
    let mut projects: Vec<Project> = serde_json::from_str(&json_from_file).unwrap();
    let project = Project {
        url: url,
        descript: descript,
    };
    projects.push(project);
    let json_to_file = serde_json::to_string(&projects).unwrap(); 
    // write to file
    std::fs::write("/Users/atamb/ayush/src/assets/project_list.json", json_to_file).unwrap();

}

fn main() {
    let cli = Cli::parse();
    match &cli.command {
        Commands::Add { url, descript } => {
           add_project_to_file(url.to_string(), descript.to_string());
        }
    }
}
