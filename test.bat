rem [Console]::OutputEncoding = [System.Text.Encoding]::UTF8
conda activate py310 & python twgenerate.py --prefix "[CLS]今年夏天"  --save_samples --save_samples_path="generated/" --device 0   --length 30   --nsamples 1  --tokenizer_path cache/vocab_small.txt   --model_path model/    --topp 1   --temperature 1.0
